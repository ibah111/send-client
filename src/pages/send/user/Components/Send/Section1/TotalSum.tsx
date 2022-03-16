import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setTotalSum } from "../../../../../../Reducer/Send";

export default function TotalSum() {
  const dispatch = useAppDispatch();
  const total_sum = useAppSelector((state) => state.Send.total_sum);
  return (
    <>
      <Grid item>
        <TextField
          error={!total_sum}
          label={t("form.send.total_sum")}
          value={total_sum}
          required
          type="number"
          onChange={(event) => dispatch(setTotalSum(event.target.value))}
        />
      </Grid>
    </>
  );
}
