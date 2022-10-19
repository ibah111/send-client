import axios from 'axios';
import server from '../utils/server';
export default async function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  const response = await axios.post<boolean>(server() + '/update_debt', {
    ...body,
    debt_id,
  });
  return response.data;
}
