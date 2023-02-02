import { Grid, TextField } from '@mui/material';
import useData from './useData';

export default function Fio() {
  const data = useData('fio');
  return (
    <Grid item xs={4}>
      <TextField
        label="ФИО"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
