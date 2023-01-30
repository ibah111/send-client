import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import useData from '../useData';

export default function StartDate() {
  const data = useData('start_date');
  return (
    <Grid xs={6} item>
      <DatePicker
        label="Дата заключения"
        value={data.value || null}
        onChange={(value) => data.setValue(value as Date)}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </Grid>
  );
}
