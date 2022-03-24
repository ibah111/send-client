import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getData from "../../../../../../../utils/getData";

export default function ReceiptRecoverDt() {
  const data = getData("receipt_recover_dt", "date", true);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <DatePicker
          label={t("form.send.receipt_recover_dt")}
          value={data.value}
          mask="__.__.____"
          onChange={(newValue: any) => data.setValue(newValue)}
          renderInput={(params) => (
            <TextField fullWidth {...params} error={data.isInvalid} />
          )}
        />
      </Grid>
    </>
  );
}
