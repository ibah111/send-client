import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export class CreateExecOld {
  court_doc_num: string;
  executive_typ: number;
  court_date: Date;
  entry_force_dt: Date;
}
export default async function createExec(value: number, old?: CreateExecOld) {
  const token = store.getState().User.token;
  const response = await axios.post<number | false>(server() + '/create_exec', {
    token,
    id: value,
    old,
  });
  return response.data;
}
