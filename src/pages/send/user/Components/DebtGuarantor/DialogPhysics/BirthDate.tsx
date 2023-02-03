import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useTranslation } from 'react-i18next';
import useData from '../useData';

export default function BirthDate() {
  const data = useData('birth_date');

  const { t } = useTranslation();
  return (
    <Grid xs={3} item>
      <DatePicker
        mask="__.__.____"
        label={t('form.debt_guarantor.birth_date')}
        value={data.value || null}
        onChange={(value) => {
          data.setValue(value as Date);
        }}
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
