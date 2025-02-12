import { forkJoin, of } from 'rxjs';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
import store from '../Reducer';
import requests from '../utils/requests';

interface saveResponse {
  law_act_response: boolean;
  law_exec_response: boolean;
}

export default function saveId() {
  const data = of({
    ...store.getState().Send,
  });
  const url = of('/Exec/saveId');
  return forkJoin([requests, url, data]).pipe(
    post<saveResponse>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
