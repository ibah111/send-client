import axios from 'axios';
import { catchError, forkJoin, map, of, tap } from 'rxjs';
import getToken from '../../api/getToken';
import { AuthUserSuccess } from '../../Schemas/Auth';
import requests, { requestsInstance } from '../../utils/requests';
import { post, transformAxios } from '@tools/rxjs-pipes/axios';
import { transformError } from '../../utils/processError';
const url = of('/login');
export default function connect() {
  return forkJoin([
    requests,
    url,
    getToken().pipe(
      tap((token) => {
        requestsInstance.defaults.headers['token'] = token;
      }),
      map(() => ''),
    ),
  ]).pipe(
    post<AuthUserSuccess>(),
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
}
