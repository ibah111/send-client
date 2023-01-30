import { Grid, TextField } from '@mui/material';
import useData from '../useData';

export default function QualityCoeff() {
  const data = useData('quality_coeff');
  return (
    <Grid item xs={6}>
      <TextField
        label="Коефф. кач-ва"
        type="number"
        value={data.value}
        onChange={(event) => data.setValue(Number(event.target.value))}
      />
    </Grid>
  );
}
