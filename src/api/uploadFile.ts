import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';

export default function uploadFile(id: number, file: File) {
  const data = new FormData();
  data.append('file', file);
  return of(data).pipe(
    post<number>(requests, `/documents/upload/${id}`),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
