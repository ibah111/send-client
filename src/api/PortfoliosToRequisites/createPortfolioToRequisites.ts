import { forkJoin, of } from 'rxjs';
import requests from '../../utils/requests';
import { post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../../utils/processError';

interface createLinkProps {
  requisites_id: number;
  portfolio_id: number;
}

export default function createPortfolioToRequisites(body: createLinkProps) {
  const url = of(`PortfoliosToRequisites/createPortfolioToRequisitesLink`);
  return forkJoin([requests, url, of(body)]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
  );
}
