import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function IdCard() {
  const data = useData('id_card');
  return (
    <Grid item xs={4}>
      <TextField
        label="№ Уд. личн"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
