import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import useDict from '../../../../../../hooks/useDict';
import useData from '../useData';

export default function Sex() {
  const dict = useDict(285);
  const data = useData('sex');
  return (
    <Grid item xs={2}>
      <FormControl required>
        <InputLabel id={'sex-label'}>Пол</InputLabel>
        <Select
          labelId="sex-label"
          label="Пол"
          value={data.value}
          onChange={(event) => data.setValue(event.target.value)}
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
