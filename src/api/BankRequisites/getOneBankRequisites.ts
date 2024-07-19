import { authRetry, get, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';

export default function getOneBankRequisites(id: number) {
  const url = of(`/getOneBankRequisites/${id}`);
  return forkJoin([requests, url]).pipe(
    get(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
