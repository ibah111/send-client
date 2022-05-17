import { DatePicker } from "@mui/x-date-pickers-pro";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import getData from "../../../../../../../utils/getData";

export default function FsspDate() {
  const { t } = useTranslation();
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
