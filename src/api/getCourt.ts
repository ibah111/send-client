import { LawCourt } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/court');
export default function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  return forkJoin([requests, url, of(data)]).pipe(
    post<LawCourt[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
