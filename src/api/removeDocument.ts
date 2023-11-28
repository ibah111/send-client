import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('documents/remove');
export default function removeDocument(id: number) {
  return forkJoin([requests, url, of({ id })]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
