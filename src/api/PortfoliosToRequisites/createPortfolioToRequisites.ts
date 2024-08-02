import { forkJoin, of } from 'rxjs';
import requests from '../../utils/requests';
import { post, transformAxios } from '@tools/rxjs-pipes';
import { transformError } from '../../utils/processError';

interface createLinkProps {
  r_requisites_id: number;
  r_portfolio_ids: number[];
}

export default function createPortfolioToRequisites(body: createLinkProps) {
  const url = of(`PortfoliosToRequisites/createPortfolioToRequisitesLink`);
  return forkJoin([requests, url, of(body)]).pipe(
    post<boolean>(),
    transformAxios(),
    transformError(),
  );
}
