import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Rnn() {
  const data = useData('tin');
  return (
    <Grid item xs={3}>
      <TextField
        label="РНН"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
