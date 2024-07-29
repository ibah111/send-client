import { authRetry, put, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';
import { BankRequisitesInstance } from '../../Reducer/Requisites';

export default function updateBankRequisites(
  id: number,
  body: BankRequisitesInstance,
) {
  const url = of(`/BankRequisites/updateBankRequisites/${id}`);
  return forkJoin([requests, url, of(body)]).pipe(
    put(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
