import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';

export default function uploadFile(id: number, file: File) {
  const data = new FormData();
  data.append('file', file);

  return new Observable<number>((subscriber) => {
    requests
      .post<number>(`/documents/upload/${id}`, data)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
