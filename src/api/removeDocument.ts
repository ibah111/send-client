import processError from '../utils/processError';
import requests from '../utils/requests';

export default async function removeDocument(id: number) {
  try {
    const res = await requests.post<boolean>('documents/remove', { id });
    return res.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
