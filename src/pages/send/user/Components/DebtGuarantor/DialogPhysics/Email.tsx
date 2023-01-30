import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Email() {
  const data = useData('string_value_1');
  return (
    <Grid item xs={6}>
      <TextField
        label="Email"
        value={data.value}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
