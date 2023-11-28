import { DebtGuarantor } from '@contact/models';
import { forkJoin, map, of } from 'rxjs';
import { DebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
import { transformInstance } from '@tools/rxjs-pipes/transformer';
const url = of('/get_debt_guarantor');
export default function getDebtGuarantor(value: number) {
  return forkJoin([requests, url, of({ id: value })]).pipe(
    post<DebtGuarantor>(),
    transformAxios(),
    transformError(),
    authRetry(),
    transformInstance(DebtGuarantorInstance),
    map((instance) => {
      const { ...result } = instance;
      return result as DebtGuarantor;
    }),
  );
}
