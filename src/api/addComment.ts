import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function addComment(
  id: number,
  value: string,
  law_act: boolean,
  law_exec: boolean,
) {
  return of({
    id,
    value,
    law_act,
    law_exec,
  }).pipe(
    post<boolean>(requests, '/add_comment'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
