import { of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export default function getDebt() {
  const request = store.getState().Search;
  return of(request).pipe(
    post<[]>(requests, '/search_debt'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
