import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../Reducer';
import getData from '../../../../../../../utils/getData';

export default function DebtGuarantor() {
  const { t } = useTranslation();
  const guarantors = useAppSelector(
    (state) => state.LawExec?.Debt?.DebtGuarantors,
  );
  const data = getData('debt_guarantor', 'string');
  console.log(data);
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
          <MenuItem value={-1}>Должник</MenuItem>
          {guarantors?.map((guarantor) => (
            <MenuItem key={guarantor.id} value={guarantor.id}>
              {guarantor.fio}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
