import { authRetry, get, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';
import { BankRequisitesInstance } from '../../Reducer/Requisites';

export default function getOneBankRequisites(id: number) {
  const url = of(`/BankRequisites/getOneBankRequisites/${id}`);
  return forkJoin([requests, url]).pipe(
    get<BankRequisitesInstance>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
