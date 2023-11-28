import { Address } from '@contact/models';

import requests from '../utils/requests';
import { forkJoin, of } from 'rxjs';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/get_debt_guarantor/address');
export default function getDebtGuarantorAddress(value: number) {
  return forkJoin([requests, url, of({ id: value })]).pipe(
    post<Address[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
