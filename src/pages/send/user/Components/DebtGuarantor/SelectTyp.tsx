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

export default function SelectTyp() {
  const dict = useDict(54);
  const data = useData('typ');
  return (
    <Grid item xs={2}>
      <FormControl required={data.required} error={data.error}>
        <InputLabel id="select-typ-id">Тип</InputLabel>
        <Select
          labelId="select-typ-id"
          label="Тип"
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
