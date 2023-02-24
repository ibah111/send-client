import { Observable } from 'rxjs';
import store from '../Reducer';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function getDebt() {
  const request = store.getState().Search;

  return new Observable<[]>((subscriber) => {
    requests
      .post('/search_debt', request)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
