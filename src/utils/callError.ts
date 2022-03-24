import { setError } from "../Reducer/Error";
import Reducer from "../Reducer";
import { Names } from "../Reducer/Send";

export default function callError(name: Names, error: string | null = null) {
  if (error) {
    Reducer.dispatch(setError([name, error]));
  } else {
    Reducer.dispatch(setError([name, null]));
  }
}
