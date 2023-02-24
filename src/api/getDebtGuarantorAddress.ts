import { Address } from '@contact/models';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function getDebtGuarantorAddress(value: number) {
  return new Observable<Address[]>((subscriber) => {
    requests
      .post<Address[]>('/get_debt_guarantor/address', {
        id: value,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
