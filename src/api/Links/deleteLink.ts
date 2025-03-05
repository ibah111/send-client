import { forkJoin, of } from 'rxjs';
import LinkType from './LinkType';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';

export default async function deleteLink(data: LinkType) {
  const url = of('/Links/deleteLink');
  return forkJoin([requests, url, of(data)]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
