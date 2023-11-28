import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
export default function deleteExec(value: number) {
  return of({ id: value }).pipe(
    post<false | number>(requests, '/delete_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
