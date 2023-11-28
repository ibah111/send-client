import { DebtCalc } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';

export default function getDebtCalc(id: number) {
  return of({ id }).pipe(
    post<DebtCalc[]>(requests, '/debt_calc'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
