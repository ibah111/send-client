import { Button } from '@mui/material';
import React from 'react';
import updateDebtGuarantor from '../../../../../api/updateDebtGuarantor';
import { useDgSelector } from './Reducer';
interface SubmitProps {
  onClose: () => void;
}
export default function Submit({ onClose }: SubmitProps) {
  const data = useDgSelector((state) => state.DebtGuarantor);
  const save = React.useCallback(() => {
    updateDebtGuarantor(data).then(onClose);
  }, [data]);
  return <Button onClick={save}>Сохранить</Button>;
}
