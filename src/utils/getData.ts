import { t } from "i18next";
import React from "react";
import { useAppDispatch, useAppSelector } from "../Reducer";
import { Names, setData } from "../Reducer/Send";
import checkDate from "./checkDate";
import checkNull from "./checkNull";
import checkString from "./checkString";
type Typed = "string" | "date" | "null" | null;
export default function getError(
  name: Names,
  type: Typed = null,
  availableEmpty: boolean = false
) {
  const dispatch = useAppDispatch();
  const ErrorValue = useAppSelector((state) => state.Error[name]);
  const SendValue = useAppSelector((state) => state.Send[name]);
  let value = SendValue;
  switch (type) {
    case "string":
      value = SendValue === null ? "" : SendValue;
      break;
  }
  const setValue = (newValue: any) => {
    switch (type) {
      case "date":
        dispatch(
          setData([
            name,
            newValue
              ? newValue.toISOString()
                ? newValue.toISOString()
                : newValue.creationData().input
              : null,
          ])
        );
        break;
      default:
        dispatch(setData([name, newValue]));
        break;
    }
  };
  React.useEffect(() => {
    switch (type) {
      case "string":
        checkString(name);
        break;
      case "date":
        checkDate(name, availableEmpty);
        break;
      case "null":
        checkNull(name);
        break;
    }
  }, [SendValue]);
  return {
    setValue,
    value,
    error_text: ErrorValue && t(`form.errors.${ErrorValue}`),
    isInvalid: Boolean(ErrorValue),
    isValid: !Boolean(ErrorValue),
  };
}
