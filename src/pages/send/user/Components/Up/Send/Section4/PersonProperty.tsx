import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getLawExec from '../../../../../../../api/getLawExec';
import { useAppDispatch, useAppSelector } from '../../../../../../../Reducer';
import { setLawExec } from '../../../../../../../Reducer/LawExec';
import { setSend } from '../../../../../../../Reducer/Send';
import getData from '../../../../../../../utils/getData';
import DebtGuarantorForm from '../../../DebtGuarantor';

export default function PersonProperty() {
  const [pp_id, setPp] = React.useState<number>();
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const person_properties = useAppSelector(
    (state) => state.LawExec?.Debt?.PersonProperties,
  );
  const parent_id = useAppSelector((state) => state.LawExec?.r_debt_id);
  const le_id = useAppSelector((state) => state.LawExec?.id);
  const data = getData('person_property', 'string');
  React.useEffect(() => {
    if (data.value && data.value >= -1) {
      if (data.value === -1) {
        setPp(undefined);
      } else {
        setPp(data.value as number);
      }
    } else {
      data.setValue(pp_id || '');
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
          {person_properties?.map((property) => (
            <MenuItem key={property.id} value={property.id}>
              {property.name}
            </MenuItem>
          ))}
          {parent_id && (
            <MenuItem
              key={-2}
              value={-2}
              onClick={() => {
                setPp(undefined);
                setOpen(true);
              }}
            >
              <em>Добавить имущество</em>
            </MenuItem>
          )}
          {data.value && (data.value > -1 || data.value === -3) && (
            <MenuItem
              key={-3}
              value={-3}
              onClick={() => {
                setPp((data.value as number) || undefined);
                setOpen(true);
              }}
            >
              <em>Редактирование имущества</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      {open && (
        <DebtGuarantorForm
          open={open}
          onClose={(id) => {
            if (id) {
              data.setValue(id);
              getLawExec(le_id!).subscribe((res) => {
                if (res !== null) {
                  dispatch(setLawExec(res));
                  dispatch(setSend(res));
                }
              });
            }

            setOpen(false);
          }}
          parent_id={parent_id}
          id={pp_id}
        />
      )}
    </Grid>
  );
}
