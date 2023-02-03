import { Button } from '@mui/material';
import React from 'react';
import updateDebtGuarantor from '../../../../../api/updateDebtGuarantor';
import { useDgSelector } from './Reducer';

export default function Submit() {
  const data = useDgSelector((state) => state.DebtGuarantor);
  const save = React.useCallback(() => {
    updateDebtGuarantor(data);
  }, []);
  return <Button onClick={save}>Сохранить</Button>;
}
