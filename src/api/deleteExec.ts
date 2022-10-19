import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function deleteExec(value: number) {
  try {
    const response = await requests.post<false | number>('/delete_exec', {
      id: value,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
