import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useTranslation } from 'react-i18next';
import useData from '../useData';
import { DateTime } from 'luxon';

export default function FinishDate() {
  const data = useData('finish_date');
  const { t } = useTranslation();
  return (
    <Grid xs={6} item>
      <DatePicker
        label={t('form.debt_guarantor.finish_date')}
        value={data.value || null}
        onChange={(value) => data.setValue(value as DateTime)}
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
