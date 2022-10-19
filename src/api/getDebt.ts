import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
export default async function getDebt() {
  const request = store.getState().Search;
  const response = await axios({
    method: 'POST',
    url: server() + '/search_debt',
    data: request,
  });
  return response.data;
}
