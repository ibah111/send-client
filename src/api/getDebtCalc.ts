import { DebtCalc } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/debt_calc');
export default function getDebtCalc(id: number) {
  return forkJoin([requests, url, of({ id })]).pipe(
    post<DebtCalc[]>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
