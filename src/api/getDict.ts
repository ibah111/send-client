import axios from 'axios';
import server from '../utils/server';
import { Dict } from '@contact/models';
export default async function getDict(value: number) {
  const response = await axios.post<Dict[]>(server() + '/dict', {
    id: value,
  });
  return response.data;
}
