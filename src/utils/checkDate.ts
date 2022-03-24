import moment from "moment";
import Reducer from "../Reducer";
import { Names } from "../Reducer/Send";
import callError from "./callError";

export default function checkDate(
  name: Names,
  availableEmpty: boolean = false
) {
  const value = Reducer.getState().Send[name];
  if (value === null) {
    if (availableEmpty) {
      callError(name, null);
    } else {
      callError(name, "empty");
    }
  } else {
    if (
      moment(value, "DD.MM.YYYY", true).isValid() ||
      moment(value, moment.ISO_8601, true).isValid()
    ) {
      callError(name, null);
    } else {
      callError(name, "invalid_date");
    }
  }
}
