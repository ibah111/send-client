import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function addComment(
  id: number,
  value: string,
  law_act: boolean,
  law_exec: boolean,
) {
  return new Observable<boolean>((subscriber) => {
    requests
      .post<boolean>('/add_comment', {
        id,
        value,
        law_act,
        law_exec,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
