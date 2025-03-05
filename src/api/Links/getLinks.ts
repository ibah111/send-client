import { forkJoin, of } from 'rxjs';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';
import LinkType from './LinkType';

export default function getLinks() {
  const url = of('/Links/getLinks');
  return forkJoin([requests, url, of()]).pipe(
    post<LinkType[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
