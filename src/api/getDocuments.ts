import { DocAttach } from '@contact/models';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
type types = 'doc' | 'law_exec';
type results<T extends types> = T extends 'doc' ? Blob : DocAttach[];
export default function getDocuments<T extends types>(id: number, type: T) {
  let promise: Promise<AxiosResponse<results<T>>>;
  switch (type) {
    case 'doc':
      promise = requests.post<results<T>>(
        '/documents/get',
        { id },
        { responseType: 'blob' },
      );

      break;
    case 'law_exec':
      promise = requests.post<results<T>>('/documents/get', {
        law_exec_id: id,
      });
      break;
    default:
      promise = requests.post<results<T>>('/documents/get', {
        law_exec_id: id,
      });
      break;
  }

  return new Observable<results<T>>((subscriber) => {
    promise.then(createNextDefault(subscriber)).catch(createError(subscriber));
  }).pipe(createRetry());
}
