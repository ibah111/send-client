import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useTranslation } from 'react-i18next';
import useData from '../useData';

export default function EndDate() {
  const data = useData('end_date');
  const { t } = useTranslation();
  return (
    <Grid xs={6} item>
      <DatePicker
        label={t('form.debt_guarantor.end_date')}
        value={data.value || null}
        onChange={(value) => data.setValue(value as Date)}
        slotProps={{
          textField: {
            fullWidth: true,
            required: data.required,
            error: data.error,
            helperText: data.helperText,
          },
        }}
      />
    </Grid>
  );
}
