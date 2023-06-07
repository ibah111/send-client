import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
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
