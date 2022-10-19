import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
import { PersonAddress } from './search';
import processError from '../utils/processError';
export class LawActPlain {
  'id': number;
  'typ': number;
  'StatusDict.name': string;
  'ActStatusDict.name': string;
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
export default async function search(): Promise<LawActPlain[]> {
  try {
    const request = store.getState().Search;
    const response = await axios({
      method: 'POST',
      url: server() + '/search_la',
      data: request,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
