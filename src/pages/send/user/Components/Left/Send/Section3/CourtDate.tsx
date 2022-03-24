import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getData from "../../../../../../../utils/getData";

export default function CourtDate() {
  const data = getData("court_date", "date");
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <DatePicker
          label={t("form.send.court_date")}
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
