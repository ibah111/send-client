import { LawExec } from '@contact/models';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function getLawExec(value: number | null) {
  return new Observable<LawExec>((subscriber) => {
    requests
      .post<LawExec>('/law_exec', { id: value })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
