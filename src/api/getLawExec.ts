import { LawExec } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export default function getLawExec(value: number | null) {
  return of({ id: value }).pipe(
    post<LawExec>(requests, '/law_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
