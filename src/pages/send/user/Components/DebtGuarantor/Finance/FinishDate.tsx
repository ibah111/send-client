import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import useData from '../useData';

export default function FinishDate() {
  const data = useData('finish_date');
  return (
    <Grid xs={6} item>
      <DatePicker
        label="Дата завершения"
        value={data.value || null}
        onChange={(value) => data.setValue(value as Date)}
        renderInput={(params) => (
          <TextField
            fullWidth
            required={data.required}
            helperText={data.helperText}
            {...params}
            error={data.error}
          />
        )}
      />
    </Grid>
  );
}
