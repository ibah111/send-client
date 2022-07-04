import { t } from "i18next";
import moment from "moment";
import { Moment } from "moment";
import React from "react";
import { useAppDispatch, useAppSelector } from "../Reducer";
import { DataNames, DataTypes, setData } from "../Reducer/Send";
import checkDate from "./checkDate";
import checkNull from "./checkNull";
import checkNumber from "./checkNumber";
import checkString from "./checkString";
type Typed = "string" | "date" | "null" | "number" | null;
export default function getError<K extends DataNames>(
  name: K,
  type: Typed = null,
  availableEmpty: boolean = false
) {
  const dispatch = useAppDispatch();
  const ErrorValue = useAppSelector((state) => state.Error[name]);
  const SendValue = useAppSelector((state) => state.Send[name]);
  let value = SendValue;
  switch (type) {
    case "string":
      //@ts-ignore
      value = SendValue === null ? "" : SendValue;
      break;
  }
  const setValue = (newValue: DataTypes[K]) => {
    switch (type) {
      case "date":
        const value: Moment = moment(newValue);
        value?.startOf("day");
        dispatch(setData([name, value]));
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
      case "number":
        checkNumber(name);
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
