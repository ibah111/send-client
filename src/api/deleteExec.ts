import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/delete_exec');
export default function deleteExec(value: number) {
  return forkJoin([requests, url, of({ id: value })]).pipe(
    post<false | number>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
