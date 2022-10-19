import axios from 'axios';
import server from '../utils/server';
export default async function getLawExec(value: number | null) {
  const response = await axios({
    method: 'POST',
    url: server() + '/law_exec',
    data: { id: value },
  });
  return response.data;
}
