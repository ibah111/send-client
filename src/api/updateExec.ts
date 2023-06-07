import { of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
import { post } from '../utils/rxjs-pipes/post';
type FileUpdate =
  | false
  | {
      file: { data: number[] };
      name: string;
    };
export default function updateExec() {
  const data = store.getState().Send;
  return of({
    ...data,
    options: { save_file: true },
  }).pipe(
    post<FileUpdate>(requests, '/update_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
