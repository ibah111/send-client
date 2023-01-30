import { Grid, TextField } from '@mui/material';
import { NumberFormatCustom } from '../../Up/Send/Section1/TotalSum';
import useData from '../useData';

export default function RealSum() {
  const data = useData('real_sum');
  return (
    <Grid item xs={4}>
      <TextField
        label="Рыночная стоимость"
        value={data.value}
        onChange={(event) => data.setValue(Number(event.target.value))}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </Grid>
  );
}
