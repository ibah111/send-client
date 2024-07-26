import { authRetry, get, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import { Portfolio } from '@contact/models';
import requests from '../../utils/requests';

export default function getAllLinksByRequisites(id: number) {
  const url = of(`getAllLinksByRequisites/${id}`);
  return forkJoin([requests, url]).pipe(
    get<Portfolio[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
