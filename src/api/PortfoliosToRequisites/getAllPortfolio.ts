import { Portfolio } from '@contact/models';
import { authRetry, get, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import requests from '../../utils/requests';
import { transformError } from '../../utils/processError';

interface searchProps {}

export default function getAllPortfolio() {
  const url = of(`/PortfoliosToRequisites/getAllPortfolio`);
  return forkJoin([requests, url]).pipe(
    get<Portfolio[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
