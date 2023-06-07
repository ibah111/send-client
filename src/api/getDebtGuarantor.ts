import { DebtGuarantor } from '@contact/models';
import { map, of } from 'rxjs';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
import { transformInstance } from '../utils/rxjs-pipes/transformInstance';
const DebtGuarantorInstance = createDebtGuarantorInstance(true);
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
