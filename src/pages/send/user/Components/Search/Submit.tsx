import { Button, Grid } from "@mui/material";
import { t } from "i18next";

export default function Submit() {
  return (
    <>
      <Grid item>
        <Button>{t("form.search.submit")}</Button>
      </Grid>
    </>
  );
}