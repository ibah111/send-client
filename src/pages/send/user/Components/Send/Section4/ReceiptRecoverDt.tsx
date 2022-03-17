import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setReceiptRecoverDt } from "../../../../../../Reducer/Send";

export default function ReceiptRecoverDt() {
  const dispatch = useAppDispatch();
  const receipt_recover_dt = useAppSelector((state) => state.Send.receipt_recover_dt);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <DatePicker
          label={t("form.send.receipt_recover_dt")}
          value={receipt_recover_dt}
          mask="__.__.____"
          onChange={(newValue: any) =>
            dispatch(setReceiptRecoverDt(newValue?.toISOString()))
          }
          renderInput={(params) => <TextField required fullWidth {...params} />}
        />
      </Grid>
    </>
  );
}
