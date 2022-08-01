import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function updateExec(law_exec_id: number, debt_id: number) {
  const token = store.getState().User.token;
  const response = await axios.post<boolean>(server() + '/update_debt', {
    token,
    law_exec_id,
    debt_id,
  });
  return response.data;
}
