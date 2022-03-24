import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getData from "../../../../../../../utils/getData";

export default function EntryForceDt() {
  const data = getData("entry_force_dt", "date");
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <DatePicker
          label={t("form.send.entry_force_dt")}
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
