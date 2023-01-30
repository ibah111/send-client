import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Company() {
  const data = useData('company_name');
  return (
    <Grid item xs={6}>
      <TextField
        label="Компания"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
