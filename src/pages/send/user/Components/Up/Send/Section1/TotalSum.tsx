import { Grid, InputBaseComponentProps, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import React from 'react';
import getData from '../../../../../../../utils/getData';
import { useTranslation } from 'react-i18next';
interface NumberCustomProps {
  onChange?: (args: { target: { value: string } }) => void;
}
const NumberFormatCustom = React.forwardRef<
  HTMLInputElement,
  NumberCustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange?.({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator=" "
      decimalSeparator=","
      decimalScale={2}
      isAllowed={({ floatValue }) =>
        Boolean(floatValue && 0 <= floatValue && floatValue <= 10000000)
      }
      valueIsNumericString
      suffix="р"
    />
  );
}) as React.ElementType<InputBaseComponentProps>;
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
