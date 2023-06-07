import { LawCourt } from '@contact/models';
import { Autocomplete, Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getCourt from '../../../../../../../api/getCourt';
import getData from '../../../../../../../utils/getData';

export default function RCourtId() {
  const { t } = useTranslation();
  const [types, setTypes] = React.useState<('' | LawCourt)[]>(['']);
  const [type, setType] = React.useState<'' | LawCourt>('');
  const [name, setName] = React.useState('');
  const data = getData('r_court_id', 'null');
  React.useEffect(() => {
    if (name[0] !== '(') {
      getCourt({ name: name === t('system.none') ? '' : name }).subscribe(
        (court) => {
          setTypes(['', ...court]);
        },
      );
    }
  }, [name, t]);
  React.useEffect(() => {
    if (data.value !== '') {
      getCourt({ id: data.value as number }).subscribe((court) => {
        setTypes(['', ...court]);
        setType(court[0]);
      });
    } else {
      setTypes(['']);
      setType('');
    }
  }, [data.value]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <Autocomplete
          disablePortal
          id="r_court_id"
          options={types}
          value={type}
          getOptionLabel={(option) =>
            option !== ''
              ? `(${option.id}) ${option.name} (${option.district})`
              : t('system.none')
          }
          inputValue={name}
          onChange={(_, value) => {
            if (value) {
              data.setValue(value.id);
            } else {
              data.setValue('');
            }
          }}
          onInputChange={(_, newInputValue) => {
            setName(newInputValue);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                value:
                  params.inputProps.value === t('system.none')
                    ? ''
                    : params.inputProps.value,
              }}
              error={data.isInvalid}
              required
              label={t('form.send.r_court_id')}
            />
          )}
        />
      </Grid>
    </>
  );
}
