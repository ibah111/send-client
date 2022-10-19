import { Dict } from '@contact/models';
import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function getDict(value: number) {
  try {
    const response = await requests.post<Dict[]>('/dict', {
      id: value,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
