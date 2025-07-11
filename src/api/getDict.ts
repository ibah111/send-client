import { Dict } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/dict');

interface GetDictParams {
  id: number;
  not_in_ids?: number[];
  not_in_names?: string[];
}

export default function getDict(value: GetDictParams) {
  return forkJoin([requests, url, of(value)]).pipe(
    post<Dict[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
