import { t } from 'i18next';
import moment, { MomentInput } from 'moment';
import { Moment } from 'moment';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../Reducer';
import { DataNames, DataTypes, setData } from '../Reducer/Send';
import callError from './callError';
import checkDate from './checkDate';
import checkNull from './checkNull';
import checkNumber from './checkNumber';
import checkString from './checkString';
type Typed = 'string' | 'date' | 'null' | 'number' | 'boolean' | null;
export default function useError<K extends DataNames>(
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
      value = (SendValue || '') as DataTypes[K];
      break;
    case 'number':
      value = (SendValue || '') as DataTypes[K];
      break;
    case 'date':
      if (!moment.isMoment(value) && value)
        value = moment(value as string) as DataTypes[K];
      break;
  }
  const setValue = React.useCallback(
    (newValue: DataTypes[K]) => {
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
    },
    [dispatch, name, type],
  );
  React.useEffect(() => {
    let error;
    switch (type) {
      case 'string':
        error = checkString(SendValue, availableEmpty);
        break;
      case 'date':
        error = checkDate(SendValue, availableEmpty);
        break;
      case 'number':
        error = checkNumber(SendValue, availableEmpty);
        break;
      case 'null':
        error = checkNull(SendValue);
        break;
    }
    callError(name, error);
  }, [name, SendValue, type, availableEmpty]);
  return {
    setValue,
    value,
    error_text: ErrorValue && t(`form.errors.${ErrorValue}`),
    isInvalid: Boolean(ErrorValue),
    isValid: !ErrorValue,
  };
}
