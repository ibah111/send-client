import axios from 'axios';
import processError from '../utils/processError';
import server from '../utils/server';
export default async function getLawExec(value: number | null) {
  try {
    const response = await axios({
      method: 'POST',
      url: server() + '/law_exec',
      data: { id: value },
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
