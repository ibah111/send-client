import { DocAttach } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
type types = 'doc' | 'law_exec';
type results<T extends types> = T extends 'doc' ? Blob : DocAttach[];
export default function getDocuments<T extends types>(id: number, type: T) {
  switch (type) {
    case 'doc':
      return of({ id }).pipe(
        post<results<T>>(requests, '/documents/get', {
          responseType: 'blob',
        }),
        transformAxios(),
        transformError(),
        authRetry(),
      );
    default:
      return of({ law_exec_id: id }).pipe(
        post<results<T>>(requests, '/documents/get'),
        transformAxios(),
        transformError(),
        authRetry(),
      );
  }
}
