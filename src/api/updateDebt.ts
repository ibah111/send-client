import { of, forkJoin } from 'rxjs';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
import requests from '../utils/requests';
const url = of('/update_debt');
export default function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  return forkJoin([
    requests,
    url,
    of({
      ...body,
      debt_id,
    }),
  ]).pipe(post<boolean>(), transformAxios(), transformError(), authRetry());
}
