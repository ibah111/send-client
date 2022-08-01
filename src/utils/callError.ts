import { setError } from '../Reducer/Error';
import Reducer from '../Reducer';
import { DataNames } from '../Reducer/Send';

export default function callError(
  name: DataNames,
  error: string | null = null,
) {
  if (error) {
    Reducer.dispatch(setError([name, error]));
  } else {
    Reducer.dispatch(setError([name, null]));
  }
}
