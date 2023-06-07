import { DebtCalc } from '@contact/models';
import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';

export default function getDebtCalc(id: number) {
  return of({ id }).pipe(
    post<DebtCalc[]>(requests, '/debt_calc'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
