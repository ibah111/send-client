import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function National() {
  const data = useData('string_value_2');
  return (
    <Grid item xs={6}>
      <TextField
        value={data.value}
        label="Гражданство"
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
