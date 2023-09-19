import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useTranslation } from 'react-i18next';
import useData from '../useData';
import { DateTime } from 'luxon';

export default function BirthDate() {
  const data = useData('birth_date');

  const { t } = useTranslation();
  return (
    <Grid xs={3} item>
      <DatePicker
        label={t('form.debt_guarantor.birth_date')}
        value={data.value || null}
        onChange={(value) => {
          data.setValue(value as DateTime);
        }}
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
