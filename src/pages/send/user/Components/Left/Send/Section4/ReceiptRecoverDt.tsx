import { DatePicker } from "@mui/x-date-pickers-pro";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import getData from "../../../../../../../utils/getData";

export default function ReceiptRecoverDt() {
  const { t } = useTranslation();
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
