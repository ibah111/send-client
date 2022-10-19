import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function addComment(
  id: number,
  value: string,
  law_act: boolean,
  law_exec: boolean,
) {
  try {
    const response = await requests.post<boolean>('/add_comment', {
      id,
      value,
      law_act,
      law_exec,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
