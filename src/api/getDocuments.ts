import { DocAttach } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
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
