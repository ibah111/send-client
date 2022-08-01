import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function search() {
  const token = store.getState().User.token;
  const request = store.getState().Search;
  const response = await axios({
    method: 'POST',
    url: server() + '/search',
    data: { token, ...request },
  });
  return response.data;
}
