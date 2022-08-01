import Reducer from '../Reducer';
import { DataNames } from '../Reducer/Send';
import callError from './callError';

export default function checkNull<K extends DataNames>(name: K) {
  const value = Reducer.getState().Send[name];
  if (!value) {
    callError(name, 'empty');
  } else {
    callError(name, null);
  }
}
