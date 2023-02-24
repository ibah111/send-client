import store from '../Reducer';
import { PersonAddress } from './search';
import requests from '../utils/requests';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
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
  return new Observable<LawActPlain[]>((subscriber) => {
    requests
      .post<LawActPlain[]>('/search_la', request)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
