import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Inn() {
  const data = useData('inn');
  return (
    <Grid item xs={3}>
      <TextField
        label="ИНН"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
