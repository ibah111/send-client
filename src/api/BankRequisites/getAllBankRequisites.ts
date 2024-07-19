import { authRetry, get, transformAxios } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';
import { transformError } from '../../utils/processError';
import requests from '../../utils/requests';

export default function getAllBankRequisites() {
  const url = of('/getAllBankRequisites');
  return forkJoin([requests, url]).pipe(
    get(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
