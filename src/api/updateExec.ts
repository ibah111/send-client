import { Observable } from 'rxjs';
import store from '../Reducer';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
type FileUpdate =
  | false
  | {
      file: { data: number[] };
      name: string;
    };
export default function updateExec() {
  const data = store.getState().Send;

  return new Observable<FileUpdate>((subscriber) => {
    requests
      .post<FileUpdate>('/update_exec', {
        ...data,
        options: { save_file: true },
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
