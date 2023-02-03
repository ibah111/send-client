import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useTranslation } from 'react-i18next';
import useData from '../useData';

export default function FinishDate() {
  const data = useData('finish_date');
  const { t } = useTranslation();
  return (
    <Grid xs={6} item>
      <DatePicker
        label={t('form.debt_guarantor.finish_date')}
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
