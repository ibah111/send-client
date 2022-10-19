import axios from 'axios';
import store from '../Reducer';
import { callError } from '../Reducer/Message';

export default function processError(e: unknown) {
  if (axios.isAxiosError(e)) {
    store.dispatch(callError(e.response?.data.message));
  }
}
