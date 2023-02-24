import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  return new Observable<boolean>((subscriber) => {
    requests
      .post<boolean>('/update_debt', {
        ...body,
        debt_id,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
