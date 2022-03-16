import { Grid, TextField } from "@mui/material";
import { t } from "i18next";

export default function Contract() {
  return (
    <>
      <Grid item>
        <TextField label={t("form.search.contract")} />
      </Grid>
    </>
  );
}
