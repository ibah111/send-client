import { LawCourt } from '@contact/models';
import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  try {
    const response = await requests.post<LawCourt[]>('/court', data);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
