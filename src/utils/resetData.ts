import store from '../Reducer';
import { ResetComment } from '../Reducer/Comment';
import { reset, setId } from '../Reducer/Send';

export default function resetData() {
  store.dispatch(setId(0));
  store.dispatch(reset());
  store.dispatch(ResetComment());
}
