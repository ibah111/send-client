import { defer, forkJoin, of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
type FileUpdate =
  | false
  | {
      file: { data: number[] };
      name: string;
    };
const url = of('/update_exec');
const storeState = store.getState().Send;
const data = defer(() => of({ ...storeState, options: { save_file: true } }));
export default function updateExec() {
  return forkJoin([requests, url, data]).pipe(
    post<FileUpdate>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
