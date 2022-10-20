import { t } from 'i18next';
import moment, { MomentInput } from 'moment';
import { Moment } from 'moment';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../Reducer';
import { DataNames, DataTypes, setData } from '../Reducer/Send';
import checkDate from './checkDate';
import checkNull from './checkNull';
import checkNumber from './checkNumber';
import checkString from './checkString';
type Typed = 'string' | 'date' | 'null' | 'number' | 'boolean' | null;
export default function getError<K extends DataNames>(
  name: K,
  type: Typed = null,
  availableEmpty = false,
) {
  const dispatch = useAppDispatch();
  const ErrorValue = useAppSelector((state) => state.Error[name]);
  const SendValue = useAppSelector((state) => state.Send[name]);
  let value: DataTypes[K] = SendValue;
  switch (type) {
    case 'string':
      value = (SendValue === null ? '' : SendValue) as DataTypes[K];
      break;
    case 'number':
      value = (SendValue === null ? '' : SendValue) as DataTypes[K];
      break;
  }
  const setValue = (newValue: DataTypes[K]) => {
    switch (type) {
      case 'date': {
        const data: Moment = moment(newValue as MomentInput);
        data?.startOf('day');
        dispatch(setData([name, data]));
        break;
      }
      default:
        dispatch(setData([name, newValue]));
        break;
    }
  };
  React.useEffect(() => {
    switch (type) {
      case 'string':
        checkString(name);
        break;
      case 'date':
        checkDate(name, availableEmpty);
        break;
      case 'number':
        checkNumber(name);
        break;
      case 'null':
        checkNull(name);
        break;
    }
  }, [SendValue]);
  return {
    setValue,
    value,
    error_text: ErrorValue && t(`form.errors.${ErrorValue}`),
    isInvalid: Boolean(ErrorValue),
    isValid: !ErrorValue,
  };
}
