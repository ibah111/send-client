import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
import processError from '../utils/processError';
export default async function updateExec() {
  try {
    const data = store.getState().Send;
    const response = await axios.post<
      | false
      | {
          file: { data: number[] };
          name: string;
        }
    >(server() + '/update_exec', data);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
