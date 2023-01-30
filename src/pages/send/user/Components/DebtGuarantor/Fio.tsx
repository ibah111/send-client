import { Grid, TextField } from '@mui/material';
import useData from './useData';

export default function Fio() {
  const data = useData('fio');
  return (
    <Grid item xs={5}>
      <TextField
        required
        label="ФИО"
        value={data.value}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
