import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import useDict from '../../../../../hooks/useDict';
import useData from './useData';

export default function SelectRole() {
  const dict = useDict(155);
  const { value, setValue } = useData('kind');
  return (
    <Grid item xs={3}>
      <FormControl>
        <InputLabel id="select-role-id">Роль</InputLabel>
        <Select
          labelId="select-role-id"
          label="Роль"
          value={value}
          onChange={(event) => setValue(event.target.value as number)}
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
