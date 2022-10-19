import store from '../Reducer';
import axios from 'axios';
import server from '../utils/server';
import processError from '../utils/processError';
export default async function getDebt() {
  try {
    const request = store.getState().Search;
    const response = await axios({
      method: 'POST',
      url: server() + '/search_debt',
      data: request,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
