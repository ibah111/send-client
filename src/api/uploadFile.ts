import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';

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
