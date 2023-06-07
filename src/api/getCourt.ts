import { LawCourt } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  return of(data).pipe(
    post<LawCourt[]>(requests, '/court'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
