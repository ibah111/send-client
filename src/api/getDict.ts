import { Dict } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export default function getDict(value: number) {
  return of({ id: value }).pipe(
    post<Dict[]>(requests, '/dict'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
