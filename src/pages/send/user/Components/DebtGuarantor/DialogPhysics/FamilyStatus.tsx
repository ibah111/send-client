import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import useDict from '../../../../../../hooks/useDict';
import useData from '../useData';

export default function FamilyStatus() {
  const dict = useDict(12);
  const data = useData('family_status');
  return (
    <Grid item xs={3}>
      <FormControl required>
        <InputLabel id="family-status-label">Семейное положение</InputLabel>
        <Select
          labelId="family-status-label"
          label="Семейное положение"
          value={data.value}
          onChange={(event) => data.setValue(event.target.value as number)}
        >
          {dict.map((item) => (
            <MenuItem key={item.id} value={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
