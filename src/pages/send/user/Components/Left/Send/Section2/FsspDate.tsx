import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getData from "../../../../../../../utils/getData";

export default function FsspDate() {
  const data = getData("fssp_date", "date");
  return (
    <>
      <Grid item>
        <DatePicker
          label={t("form.send.fssp_date")}
          value={data.value}
          mask="__.__.____"
          onChange={(newValue: any) => data.setValue(newValue)}
          renderInput={(params) => (
            <TextField required fullWidth {...params} error={data.isInvalid} />
          )}
        />
      </Grid>
    </>
  );
}
