import { Address } from '@contact/models';

import requests from '../utils/requests';
import { of } from 'rxjs';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function getDebtGuarantorAddress(value: number) {
  return of({ id: value }).pipe(
    post<Address[]>(requests, '/get_debt_guarantor/address'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
