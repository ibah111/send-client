import axios from 'axios';
import store from '../Reducer';
import { callError } from '../Reducer/Message';

export default function processError(e: unknown) {
  if (axios.isAxiosError(e)) {
    if (e.response) {
      if (e.response.data) {
        store.dispatch(callError(e.response.data.message));
      } else {
        store.dispatch(callError('Произошла непредвиденная ошибка сервера'));
      }
    } else {
      store.dispatch(callError('Произошла ошибка при запросе'));
    }
  }
}
