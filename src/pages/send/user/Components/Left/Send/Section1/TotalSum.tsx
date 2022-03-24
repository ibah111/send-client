import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import NumberFormat from "react-number-format";
import React from "react";
import getData from "../../../../../../../utils/getData";
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props: any,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
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
      isNumericString
      suffix="р"
    />
  );
});
export default function TotalSum() {
  const data = getData("total_sum", "string");
  return (
    <>
      <Grid item>
        <TextField
          error={data.isInvalid}
          label={t("form.send.total_sum")}
          value={data.value}
          required
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          onChange={(event) => data.setValue(event.target.value)}
        />
      </Grid>
    </>
  );
}
