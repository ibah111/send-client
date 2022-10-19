import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function getLawExec(value: number | null) {
  try {
    const response = await requests.post('/law_exec', { id: value });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
