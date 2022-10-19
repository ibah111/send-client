import axios from 'axios';
import processError from '../utils/processError';
import server from '../utils/server';
export default async function deleteExec(value: number) {
  try {
    const response = await axios.post<false | number>(
      server() + '/delete_exec',
      {
        id: value,
      },
    );
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
