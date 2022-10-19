import axios from 'axios';
import processError from '../utils/processError';
import server from '../utils/server';
export default async function updateDebt(
  body: { law_act_id?: number; law_exec_id?: number },
  debt_id: number,
) {
  try {
    const response = await axios.post<boolean>(server() + '/update_debt', {
      ...body,
      debt_id,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
