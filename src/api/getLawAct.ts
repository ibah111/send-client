import store from '../Reducer';
import { PersonAddress } from './search';
import requests from '../utils/requests';
import { of } from 'rxjs';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export class LawActPlain {
  'id': number;
  'typ': number;
  'StatusDict.name': string;
  'ActStatusDict.name': string;
  'LawActPersonLink.DebtGuarantor.fio'?: string;
  'Person.fio': string;
  'Person.id': number;
  'Person.f': string;
  'Person.i': string;
  'Person.o': string;
  'Person.Addresses': PersonAddress[];
  'Portfolio.name': string;
  'Debt.id': number;
  'Debt.contract': string;
  'Debt.debt_sum': number;
  'Debt.status': number;
  'Debt.StatusDict.name': string;
}
export default function search() {
  const request = store.getState().Search;
  return of(request).pipe(
    post<LawActPlain[]>(requests, '/search_la'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
