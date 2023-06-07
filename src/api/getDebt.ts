import { of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function getDebt() {
  const request = store.getState().Search;
  return of(request).pipe(
    post<[]>(requests, '/search_debt'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
