import { Grid, TextField } from '@mui/material';
import useData from './useData';

export default function ExtId() {
  const data = useData('ext_id');
  return (
    <Grid item xs={2}>
      <TextField
        label="ID Клиента"
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
        value={data.value}
      />
    </Grid>
  );
}
