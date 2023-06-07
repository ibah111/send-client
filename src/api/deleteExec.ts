import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function deleteExec(value: number) {
  return of({ id: value }).pipe(
    post<false | number>(requests, '/delete_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
