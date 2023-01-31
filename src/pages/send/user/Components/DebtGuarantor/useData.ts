import { DebtGuarantor } from '@contact/models';
import { Attributes } from '@sql-tools/sequelize';
import React from 'react';
import { DataInstance } from './DataInstance';
import {
  setDebtGuarantor,
  setDebtGuarantorValue,
  TypeDebtGuarantor,
  useDgDispatch,
  useDgSelector,
} from './Reducer';
import checker from './validation/checker';
import errorCheck from './validation/errorCheck';
import helperCheck from './validation/helperCheck';
import requiredCheck from './validation/requiredCheck';
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
  const value = useDgSelector((state) => state.DebtGuarantor?.[name] || '');
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
