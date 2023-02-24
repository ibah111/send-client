import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';

export default function removeDocument(id: number) {
  return new Observable<boolean>((subscriber) => {
    requests
      .post<boolean>('documents/remove', { id })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
