import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  const token = store.getState().User.token;
  const response = await axios.post<boolean>(server() + '/update_debt', {
    token,
    ...body,
    debt_id,
  });
  return response.data;
}
