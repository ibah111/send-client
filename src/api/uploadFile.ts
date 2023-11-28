import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { createFormat } from '@tools/rxjs-pipes/format';
import { transformError } from '../utils/processError';
const url = of('/documents/upload/%1$d');
const format = createFormat<[number]>();
export default function uploadFile(id: number, file: File) {
  const data = new FormData();
  data.append('file', file);
  return forkJoin([requests, url.pipe(format(id)), of(data)]).pipe(
    post<number>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
