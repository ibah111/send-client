import { authRetry, post, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';
import { BankRequisitesClass } from './BankRequisitesInput';

export default function addBankRequisites(body: Partial<BankRequisitesClass>) {
  const url = of('/BankRequisites/addBankRequisits');
  return forkJoin([requests, url, of(body)]).pipe(
    post(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
