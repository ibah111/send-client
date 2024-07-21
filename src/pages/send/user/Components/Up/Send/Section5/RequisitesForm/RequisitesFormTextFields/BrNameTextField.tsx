import { TextField } from '@mui/material';
import useRequisitesData from '../../../../../../../../../hooks/useRequisitesData';
import { useAppSelector } from '../../../../../../../../../Reducer';

export default function BrNameTextField() {
  const br_name = useAppSelector((state) => state.Requisites.br_name);
  const data = useRequisitesData('br_name', {
    br_name,
  });
  return (
    <TextField
      fullWidth
      label="Юр.имя"
      onChange={(event) => {
        const value = event.target.value;
        data.onChange(value);
      }}
      value={data.value}
      helperText={data.helperText}
    />
  );
}
