import { forkJoin, of } from 'rxjs';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';

export default function addLink(data: { item_name: string; item_url: string }) {
  const url = of('/Links/addLink');
  return forkJoin([requests, url, of(data)]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
