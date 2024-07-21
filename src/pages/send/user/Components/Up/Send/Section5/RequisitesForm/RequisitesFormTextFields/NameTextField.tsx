import { TextField } from '@mui/material';
import useRequisitesData from '../../../../../../../../../hooks/useRequisitesData';
import { useAppSelector } from '../../../../../../../../../Reducer';

export default function NameTextField() {
  const name = useAppSelector((state) => state.Requisites.recipient);
  const data = useRequisitesData('name', {
    recipient: name,
  });
  return (
    <TextField
      fullWidth
      label="Наименование"
      onChange={(event) => {
        const value = event.target.value;
        data.onChange(value);
      }}
      value={data.value}
      helperText={data.helperText}
    />
  );
}
