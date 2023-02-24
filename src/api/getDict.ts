import { Dict } from '@contact/models';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function getDict(value: number) {
  return new Observable<Dict[]>((subscriber) => {
    requests
      .post<Dict[]>('/dict', {
        id: value,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
