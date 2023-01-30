import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function Position() {
  const data = useData('position');
  return (
    <Grid xs={6} item>
      <TextField
        label="Должность"
        value={data.value}
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
