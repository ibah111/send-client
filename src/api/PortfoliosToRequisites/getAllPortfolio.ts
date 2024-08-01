import { Portfolio } from '@contact/models';
import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import requests from '../../utils/requests';
import { transformError } from '../../utils/processError';

class searchProps {
  name: string;
  paginationModel: {
    page: number;
    pageSize: number;
  };
}

class responseType {
  count: number;
  rows: Portfolio[];
}

export default function getAllPortfolio(body: searchProps) {
  const url = of(`/BankRequisites/getAllPortfolio`);
  return forkJoin([requests, url, of(body)]).pipe(
    post<responseType>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
