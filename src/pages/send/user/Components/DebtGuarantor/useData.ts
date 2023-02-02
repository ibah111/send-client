import { DebtGuarantor } from '@contact/models';
import React from 'react';
import { createInstance } from './DataInstance';
import {
  setDebtGuarantorValue,
  TypeDebtGuarantor,
  useDgDispatch,
  useDgSelector,
} from './Reducer';
import checker from './validation/checker';
const DataInstance = createInstance();
export interface ResultData<T extends keyof TypeDebtGuarantor> {
  value: TypeDebtGuarantor[T] | string;
  setValue: (value: DebtGuarantor[T]) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}
export default function useData<T extends keyof TypeDebtGuarantor>(
  name: T,
): ResultData<T> {
  const value = useDgSelector((state) =>
    state.DebtGuarantor?.[name] === undefined ||
    state.DebtGuarantor?.[name] === null
      ? ''
      : state.DebtGuarantor?.[name],
  );
  const dispatch = useDgDispatch();
  const setValue = (value: DebtGuarantor[T]) => {
    dispatch(setDebtGuarantorValue([name, value]));
  };
  const { required, error, helperText } = React.useMemo(
    () => checker(DataInstance, name, value),
    [name, value],
  );
  return { value, setValue, required, error, helperText };
}
