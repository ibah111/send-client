import processError from '../utils/processError';
import requests from '../utils/requests';

export default async function uploadFile(id: number, file: File) {
  try {
    const data = new FormData();
    data.append('file', file);
    const res = await requests.post<number>(`/documents/upload/${id}`, data);
    return res.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
