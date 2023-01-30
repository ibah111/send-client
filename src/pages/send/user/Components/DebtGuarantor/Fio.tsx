import { Grid, TextField } from '@mui/material';
import useData from './useData';

export default function Fio() {
  const data = useData('fio');
  return (
    <Grid item xs={5}>
      <TextField
        label="ФИО"
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
