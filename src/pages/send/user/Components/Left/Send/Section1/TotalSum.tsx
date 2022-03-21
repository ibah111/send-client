import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setTotalSum } from "../../../../../../../Reducer/Send";
import NumberFormat from "react-number-format";
import React from "react";
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
  const dispatch = useAppDispatch();
  const total_sum = useAppSelector((state) => state.Send.total_sum);
  return (
    <>
      <Grid item>
        <TextField
          error={total_sum === null}
          label={t("form.send.total_sum")}
          value={total_sum === null ? "" : total_sum}
          required
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          onChange={(event) =>
            dispatch(
              setTotalSum(event.target.value ? event.target.value : null)
            )
          }
        />
      </Grid>
    </>
  );
}
