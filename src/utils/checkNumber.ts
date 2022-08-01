import Reducer from '../Reducer';
import { DataNames } from '../Reducer/Send';
import callError from './callError';

export default function checkNumber<K extends DataNames>(name: K) {
  const value = Reducer.getState().Send[name];
  if (!value) {
    callError(name, 'empty');
  } else {
    if (value === 0) {
      callError(name, 'number_0');
    } else {
      callError(name, null);
    }
  }
}
