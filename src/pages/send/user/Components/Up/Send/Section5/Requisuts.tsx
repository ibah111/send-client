import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { BankRequisitesClass } from '../../../../../../../api/BankRequisites/BankRequisitesInput';

export default function Requisits() {
  const label = 'Реквизиты';
  const requisitsArray: BankRequisitesClass[] = [];
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select label>
            <MenuItem value={''}>Исход. реквизиты</MenuItem>
            {requisitsArray.map((type, index) => (
              <MenuItem key={index} value={type.id}>{``}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
