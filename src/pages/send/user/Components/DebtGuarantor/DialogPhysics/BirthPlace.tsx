import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function BirthPlace() {
  const data = useData('birth_place');
  return (
    <Grid item xs={12}>
      <TextField
        label="Место рождения"
        value={data.value}
        multiline
        onChange={(event) => data.setValue(event.target.value)}
      />
    </Grid>
  );
}
