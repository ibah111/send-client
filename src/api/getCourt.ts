import axios from 'axios';
import server from '../utils/server';
import { LawCourt } from '@contact/models';
import processError from '../utils/processError';
export default async function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  try {
    const response = await axios.post<LawCourt[]>(server() + '/court', data);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
