import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export class CreateExecOld {
  court_doc_num: string;
  executive_typ: number;
  court_date: Date;
  entry_force_dt: Date;
}
export default function createExec(value: number, old?: CreateExecOld) {
  return of({ id: value, old }).pipe(
    post<number | false>(requests, '/create_exec'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
