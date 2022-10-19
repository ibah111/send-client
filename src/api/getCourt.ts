import axios from 'axios';
import server from '../utils/server';
import { LawCourt } from '@contact/models';
export default async function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  const response = await axios.post<LawCourt[]>(server() + '/court', data);
  return response.data;
}
