import { Dict } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/dict');
export default function getDict(value: number) {
  return forkJoin([requests, url, of({ id: value })]).pipe(
    post<Dict[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
