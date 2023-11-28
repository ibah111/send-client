import { defer, forkJoin, of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const data = defer(() => of(store.getState().Search));
const url = of('/search_debt');
export default function getDebt() {
  return forkJoin([requests, url, data]).pipe(
    post<[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
