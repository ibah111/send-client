import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import useDict from '../../../../../hooks/useDict';
import useData from './useData';

export default function SelectRole() {
  const dict = useDict(155);
  const data = useData('kind');
  console.log(dict);
  console.log(data.value);
  return (
    <Grid item xs={3}>
      <FormControl required={data.required} error={data.error}>
        <InputLabel id="select-role-id">Роль</InputLabel>
        <Select
          labelId="select-role-id"
          label="Роль"
          value={data.value}
          onChange={(event) => data.setValue(event.target.value as number)}
        >
          {dict.map((item) => (
            <MenuItem key={item.id} value={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{data.helperText}</FormHelperText>
      </FormControl>
    </Grid>
  );
}
