import { DebtGuarantor } from '@contact/models';
import { map, of } from 'rxjs';
import { DebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import requests from '../utils/requests';
import {
  post,
  transformAxios,
  authRetry,
  transformInstance,
} from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export default function getDebtGuarantor(value: number) {
  return of({ id: value }).pipe(
    post<DebtGuarantor>(requests, '/get_debt_guarantor'),
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
