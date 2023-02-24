import { DebtCalc } from '@contact/models';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';

export default function getDebtCalc(id: number) {
  return new Observable<DebtCalc[]>((subscriber) => {
    requests
      .post<DebtCalc[]>('/debt_calc', {
        id,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
