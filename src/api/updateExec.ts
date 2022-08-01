import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function updateExec() {
  const token = store.getState().User.token;
  const data = store.getState().Send;
  const response = await axios.post<
    | false
    | {
        file: { data: number[] };
        name: string;
      }
  >(server() + '/update_exec', { token, ...data });
  return response.data;
}
