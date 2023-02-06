import { Address } from '@contact/models';
import React from 'react';
import {
  setDebtGuarantorAddressValue,
  TypeDebtGuarantorAddress,
  useDgDispatch,
  useDgSelector,
} from '../../Reducer';
import checker from '../../validation/checker';
import { AddressInstance } from '../AddressInstance';
export interface ResultData<T extends keyof TypeDebtGuarantorAddress> {
  value: TypeDebtGuarantorAddress[T] | string;
  setValue: (value: TypeDebtGuarantorAddress[T]) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}
export default function useData<T extends keyof TypeDebtGuarantorAddress>(
  name: T,
): ResultData<T> {
  const value = useDgSelector((state) =>
    state.Address?.[name] === undefined || state.Address?.[name] === null
      ? ''
      : state.Address?.[name],
  );
  const dispatch = useDgDispatch();
  const setValue = (value: Address[T]) => {
    dispatch(setDebtGuarantorAddressValue([name, value]));
  };
  const { required, error, helperText } = React.useMemo(
    () => checker(AddressInstance, name, value),
    [name, value],
  );
  return { value, setValue, required, error, helperText };
}
