import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../Reducer';
import getData from '../../../../../../../utils/getData';
import DebtGuarantorForm from '../../../DebtGuarantor';

export default function DebtGuarantor() {
  const [dg_id, setDg] = React.useState<number>();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const guarantors = useAppSelector(
    (state) => state.LawExec?.Debt?.DebtGuarantors,
  );
  const parent_id = useAppSelector((state) => state.LawExec?.r_debt_id);
  const data = getData('debt_guarantor', 'string');
  React.useEffect(() => {
    if (data.value && data.value >= -1) {
      if (data.value === -1) {
        setDg(undefined);
      } else {
        setDg(data.value as number);
      }
    } else {
      data.setValue(dg_id || '');
    }
  }, [data.value]);
  return (
    <Grid width={200} item>
      <FormControl fullWidth>
        <InputLabel id={'debt_guarantor'}>
          {t('form.send.debt_guarantor')}
        </InputLabel>
        <Select
          label={t('form.send.debt_guarantor')}
          value={data.value}
          onChange={(event) => {
            data.setValue(event.target.value);
          }}
        >
          <MenuItem key={-1} value={-1}>
            <em>Должник</em>
          </MenuItem>
          {guarantors?.map((guarantor) => (
            <MenuItem key={guarantor.id} value={guarantor.id}>
              {guarantor.fio}
            </MenuItem>
          ))}
          {parent_id && (
            <MenuItem
              key={-2}
              value={-2}
              onClick={() => {
                setOpen(true);
              }}
            >
              <em>Добавить должника</em>
            </MenuItem>
          )}
          {data.value && (data.value > -1 || data.value === -3) && (
            <MenuItem
              key={-3}
              value={-3}
              onClick={() => {
                setOpen(true);
              }}
            >
              <em>Редактирование должника</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      {open && (
        <DebtGuarantorForm
          open={open}
          onClose={() => setOpen(false)}
          parent_id={parent_id}
          id={dg_id}
        />
      )}
    </Grid>
  );
}
