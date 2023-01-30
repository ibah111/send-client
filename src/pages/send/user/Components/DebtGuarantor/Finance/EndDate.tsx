import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import useData from '../useData';

export default function EndDate() {
  const data = useData('end_date');
  return (
    <Grid xs={6} item>
      <DatePicker
        label="Дата окончания"
        value={data.value || null}
        onChange={(value) => data.setValue(value as Date)}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </Grid>
  );
}
