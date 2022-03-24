import Reducer from "../Reducer";
import { Names } from "../Reducer/Send";
import callError from "./callError";

export default function checkString(name: Names) {
  const value = Reducer.getState().Send[name];
  if (!value) {
    callError(name, "empty");
  } else {
    callError(name, null);
  }
}
