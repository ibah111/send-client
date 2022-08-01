import axios from 'axios';
import store from '../Reducer';
import server from '../utils/server';

export default async function getDocuments(id?: number) {
  const token = store.getState().User.token;
  const law_exec_id = store.getState().Send.id;
  const response = await axios.post(server() + '/document', {
    token,
    law_exec_id,
    id,
  });
  return response.data;
}
