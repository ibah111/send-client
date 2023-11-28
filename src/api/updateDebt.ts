import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
export default function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  return of({
    ...body,
    debt_id,
  }).pipe(
    post<boolean>(requests, '/update_debt'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
