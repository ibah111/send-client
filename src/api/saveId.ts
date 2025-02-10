import { forkJoin, of } from 'rxjs';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
import store from '../Reducer';
import requests from '../utils/requests';

export default function saveId() {
  const data = of({
    ...store.getState().Send,
  });
  const url = of('/Exec/saveId');
  return forkJoin([requests, url, data]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
