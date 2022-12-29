import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getCourt from '../../../../../../../api/getCourt';
import { useAppSelector } from '../../../../../../../Reducer';

export default function Address() {
  const { t } = useTranslation();
  const [address, setAddress] = React.useState('');
  const r_court_id = useAppSelector((state) => state.Send.r_court_id);
  React.useEffect(() => {
    if (r_court_id !== '') {
      getCourt({ id: r_court_id as number }).then((court) => {
        setAddress(court[0].address!);
      });
    } else {
      setAddress('');
    }
  }, [r_court_id]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <TextField
          fullWidth
          label={t('form.send.law_court.address')}
          value={address || ''}
          disabled
        />
      </Grid>
    </>
  );
}
