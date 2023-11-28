import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/add_comment');
export default function addComment(
  id: number,
  value: string,
  law_act: boolean,
  law_exec: boolean,
) {
  return forkJoin([
    requests,
    url,
    of({
      id,
      value,
      law_act,
      law_exec,
    }),
  ]).pipe(post<boolean>(), transformAxios(), transformError(), authRetry());
}
