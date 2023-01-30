import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import useData from '../useData';

export default function BirthDate() {
  const data = useData('birth_date');
  return (
    <Grid xs={3} item>
      <DatePicker
        mask="__.__.____"
        label="Дата рождения"
        value={data.value || null}
        onChange={(value) => {
          console.log(value);
          data.setValue(value as Date);
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </Grid>
  );
}
