import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
import { LawCourt } from '@contact/models';
export default async function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  const token = store.getState().User.token;
  const response = await axios.post<LawCourt[]>(server() + '/court', {
    token,
    ...data,
  });
  return response.data;
}
