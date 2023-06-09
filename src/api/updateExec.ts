import { of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
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
