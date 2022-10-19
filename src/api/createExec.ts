import axios from 'axios';
import processError from '../utils/processError';
import server from '../utils/server';
export class CreateExecOld {
  court_doc_num: string;
  executive_typ: number;
  court_date: Date;
  entry_force_dt: Date;
}
export default async function createExec(value: number, old?: CreateExecOld) {
  try {
    const response = await axios.post<number | false>(
      server() + '/create_exec',
      {
        id: value,
        old,
      },
    );
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
