import { Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import resetData from '../../../../../../utils/resetData';

export default function Reset() {
  const { t } = useTranslation();
  return (
    <>
      <Grid item>
        <Button onClick={resetData}>{t('form.search.reset')}</Button>
      </Grid>
    </>
  );
}
