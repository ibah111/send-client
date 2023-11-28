import { Address } from '@contact/models';

import requests from '../utils/requests';
import { of } from 'rxjs';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
export default function getDebtGuarantorAddress(value: number) {
  return of({ id: value }).pipe(
    post<Address[]>(requests, '/get_debt_guarantor/address'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
