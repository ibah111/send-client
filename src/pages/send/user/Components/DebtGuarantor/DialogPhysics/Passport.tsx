import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Passport() {
  const data = useData('passport');
  return (
    <Grid item xs={12}>
      <TextField
        label="Паспорт"
        value={data.value}
        multiline
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
