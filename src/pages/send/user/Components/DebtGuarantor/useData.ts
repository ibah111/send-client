import { DebtGuarantor } from '@contact/models';
import { Attributes } from '@sql-tools/sequelize';
import {
  setDebtGuarantor,
  setDebtGuarantorValue,
  TypeDebtGuarantor,
  useDgDispatch,
  useDgSelector,
} from './Reducer';

export default function useData<T extends keyof TypeDebtGuarantor>(name: T) {
  const value = useDgSelector((state) => state.DebtGuarantor?.[name] || '');
  const dispatch = useDgDispatch();
  const setValue = (value: DebtGuarantor[T]) => {
    dispatch(setDebtGuarantorValue([name, value]));
  };
  return { value, setValue, required: true, error: true, helperText: 'Ашибка' };
}
