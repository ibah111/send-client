import axios from 'axios';
import server from '../utils/server';
export default async function deleteExec(value: number) {
  const response = await axios.post<false | number>(server() + '/delete_exec', {
    id: value,
  });
  return response.data;
}
