import { authRetry, put, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';
import { BankRequisitesClass } from './BankRequisitesInput';

export default function updateBankRequisites(
  id: number,
  body: BankRequisitesClass,
) {
  const url = of(`/updateBankRequisites/${id}`);
  return forkJoin([requests, url, of(body)]).pipe(
    put(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
