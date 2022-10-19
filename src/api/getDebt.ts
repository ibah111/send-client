import store from '../Reducer';
import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function getDebt() {
  try {
    const request = store.getState().Search;
    const response = await requests.post('/search_debt', request);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
