import { LawCourt } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
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
