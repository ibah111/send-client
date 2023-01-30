import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Contract() {
  const data = useData('contract');
  return (
    <Grid item xs={6}>
      <TextField
        label="Договор"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
