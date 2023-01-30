import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Passport() {
  const data = useData('passport');
  return (
    <Grid item xs={12}>
      <TextField
        label="Паспорт"
        value={data.value}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        multiline
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
