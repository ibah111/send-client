import store from '../Reducer';
import processError from '../utils/processError';
import requests from '../utils/requests';
export class PersonAddress {
  full_adr: string;
}
export class LawExecPlain {
  'id': number;
  'court_doc_num': string;
  'executive_typ': number;
  'fssp_doc_num': string;
  'court_date': Date;
  'entry_force_dt': Date;
  'StateDict.name': string;
  'LawAct.id': number;
  'LawAct.typ': number;
  'LawAct.StatusDict.name': string;
  'LawAct.ActStatusDict.name': string;
  'Portfolio.name': string;
  'ExecutiveTyp.name': string;
  'Debt.id': number;
  'Debt.contract': string;
  'Debt.debt_sum': number;
  'Debt.status': number;
  'Debt.StatusDict.name': string;
  'Person.fio': string;
  'Person.id': number;
  'Person.f': string;
  'Person.i': string;
  'Person.o': string;
  'Person.Addresses': PersonAddress[];
}
export default async function search() {
  try {
    const request = store.getState().Search;
    const response = await requests.post<LawExecPlain[]>('/search', request);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
