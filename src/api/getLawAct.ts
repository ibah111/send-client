import store from '../Reducer';
import { PersonAddress } from './search';
import processError from '../utils/processError';
import requests from '../utils/requests';
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
export default async function search() {
  try {
    const request = store.getState().Search;
    const response = await requests.post<LawActPlain[]>('/search_la', request);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
