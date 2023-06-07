import { DebtGuarantor } from '@contact/models';
import React from 'react';
import { createDebtGuarantorInstance } from './DebtGuarantorInstance';
import {
  setDebtGuarantorValue,
  TypeDebtGuarantor,
  useDgDispatch,
  useDgSelector,
} from './Reducer';
import checker from './validation/checker';
const DebtGuarantorInstance = createDebtGuarantorInstance();
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
  const setValue = React.useCallback((value: DebtGuarantor[T]) => {
    dispatch(setDebtGuarantorValue([name, value]));
  }, []);
  const { required, error, helperText } = React.useMemo(
    () => checker(DebtGuarantorInstance, name, value),
    [name, value],
  );
  React.useEffect(() => {
    if (value === '') {
      dispatch(setDebtGuarantorValue([name, null]));
    }
  }, [value, dispatch]);
  return { value, setValue, required, error, helperText };
}
