import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import getData from "../../../../../../../utils/getData";

export default function LoadDt() {
  const { t } = useTranslation();
  const data = getData("load_dt", "date");
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <DatePicker
          label={t("form.send.load_dt")}
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
