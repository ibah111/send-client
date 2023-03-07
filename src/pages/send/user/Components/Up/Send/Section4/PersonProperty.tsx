import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../Reducer';
import { Vehicle } from '../../../../../../../Schemas/Vehicle';
import getData from '../../../../../../../utils/getData';

export default function PersonProperty() {
  const [pp_id, setPp] = React.useState<number>();
  const { t } = useTranslation();
  const person_properties = useAppSelector(
    (state) => state.LawExec?.Debt?.PersonProperties,
  );
  const data = getData('person_property', 'string');
  React.useEffect(() => {
    if (data.value && data.value > 0) {
      setPp(person_properties?.[0]?.id);
    } else {
      data.setValue(pp_id || null);
    }
  }, [data.value]);
  return (
    <Grid width={200} item>
      <FormControl fullWidth>
        <InputLabel id={'person_property'}>
          {t('form.send.person_property')}
        </InputLabel>
        <Select
          label={t('form.send.person_property')}
          value={data.value}
          onChange={(event) => {
            data.setValue(event.target.value);
          }}
        >
          <MenuItem key={-1} value={''}>
            <em>Нету</em>
          </MenuItem>
          {person_properties
            ?.map(
              (property) =>
                new Vehicle(
                  property.PersonPropertyParams!,
                  property.StatusDict!.name,
                ),
            )
            .map((property) => (
              <MenuItem key={property.id} value={property.id}>
                {property.status} {property.model} {property.vin}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
