import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export class CreateExecOld {
  court_doc_num: string;
  executive_typ: number;
  court_date: Date;
  entry_force_dt: Date;
}
export default function createExec(value: number, old?: CreateExecOld) {
  return new Observable<number | false>((subscriber) => {
    requests
      .post<number | false>('/create_exec', {
        id: value,
        old,
      })
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
