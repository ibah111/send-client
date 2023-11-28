import { LawExec } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/law_exec');
export default function getLawExec(value: number | null) {
  return forkJoin([requests, url, of({ id: value })]).pipe(
    post<LawExec>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
