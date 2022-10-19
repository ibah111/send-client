import { DatePicker } from '@mui/x-date-pickers-pro';
import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getData from '../../../../../../../utils/getData';

export default function CourtDate() {
  const { t } = useTranslation();
  const data = getData('court_date', 'date');
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <DatePicker
          label={t('form.send.court_date')}
          value={data.value}
          mask="__.__.____"
          onChange={(newValue) => data.setValue(newValue)}
          renderInput={(params) => (
            <TextField required fullWidth {...params} error={data.isInvalid} />
          )}
        />
      </Grid>
    </>
  );
}
