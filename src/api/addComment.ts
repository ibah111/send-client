import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
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
