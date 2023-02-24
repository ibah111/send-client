import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function deleteExec(value: number) {
  return new Observable<false | number>((subscriber) => {
    requests
      .post<false | number>('/delete_exec', {
        id: value,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
