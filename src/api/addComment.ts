import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function addComment(
  id: number,
  value: string,
  law_act: boolean,
  law_exec: boolean,
) {
  const token = store.getState().User.token;
  const response = await axios.post<boolean>(server() + '/add_comment', {
    token,
    id,
    value,
    law_act,
    law_exec,
  });
  return response.data;
}
