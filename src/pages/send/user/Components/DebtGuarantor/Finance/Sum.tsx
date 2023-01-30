import { Grid, TextField } from '@mui/material';
import { NumberFormatCustom } from '../../Up/Send/Section1/TotalSum';
import useData from '../useData';

export default function Sum() {
  const data = useData('sum');
  return (
    <Grid item xs={4}>
      <TextField
        label="Залоговая стоимость"
        value={data.value}
        onChange={(event) => data.setValue(Number(event.target.value))}
        required={data.required}
        error={data.error}
        helperText={data.helperText}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </Grid>
  );
}
