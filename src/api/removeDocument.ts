import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';

export default function removeDocument(id: number) {
  return of({ id }).pipe(
    post<boolean>(requests, 'documents/remove'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
