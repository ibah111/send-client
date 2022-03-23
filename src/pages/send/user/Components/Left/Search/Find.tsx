import { Button, Grid } from "@mui/material";
import { t } from "i18next";

export default function Find({ onClick }: { onClick: () => void }) {
  return (
    <>
      <Grid item>
        <Button onClick={onClick}>{t("form.search.find")}</Button>
      </Grid>
    </>
  );
}
