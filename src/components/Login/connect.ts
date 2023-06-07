import axios from 'axios';
import { catchError, mergeMap, of } from 'rxjs';
import getToken from '../../api/getToken';
import { AuthUserSuccess } from '../../Schemas/Auth';
import requests from '../../utils/requests';
import { post } from '../../utils/rxjs-pipes/post';
import { transformAxios } from '../../utils/rxjs-pipes/transformAxios';
import { transformError } from '../../utils/rxjs-pipes/transformError';

export default function connect() {
  return getToken().pipe(
    mergeMap((token) => {
      requests.defaults.headers['token'] = token;
      return of('').pipe(
        post<AuthUserSuccess>(requests, '/login'),
        transformAxios(),
        transformError(),
        catchError((e: unknown) => {
          if (axios.isAxiosError(e)) {
            const data = e.response?.data;
            if (data.Result === 'error') {
              throw data?.Message;
            } else {
              // eslint-disable-next-line no-throw-literal
              throw null;
            }
          }
          throw e;
        }),
      );
    }),
  );
}
