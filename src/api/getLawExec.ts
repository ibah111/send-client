import { LawExec } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function getLawExec(value: number | null) {
  return of({ id: value }).pipe(
    post<LawExec>(requests, '/law_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
