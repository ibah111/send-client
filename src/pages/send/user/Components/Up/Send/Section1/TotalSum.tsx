import { Grid, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import React from 'react';
import getData from '../../../../../../../utils/getData';
import { useTranslation } from 'react-i18next';
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props: any,
  ref,
) {
  const { onChange, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator=" "
      decimalSeparator=","
      decimalScale={2}
      isAllowed={({ floatValue }) =>
        floatValue && 0 <= floatValue && floatValue <= 10000000
      }
      valueIsNumericString
      suffix="р"
    />
  );
});
export default function TotalSum() {
  const { t } = useTranslation();
  const data = getData('total_sum', 'number');
  return (
    <>
      <Grid item>
        <TextField
          error={data.isInvalid}
          label={t('form.send.total_sum')}
          value={data.value}
          required
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          onChange={(event) => data.setValue(Number(event.target.value))}
        />
      </Grid>
    </>
  );
}
