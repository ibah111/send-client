import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';

export default function removeDocument(id: number) {
  return of({ id }).pipe(
    post<boolean>(requests, 'documents/remove'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
