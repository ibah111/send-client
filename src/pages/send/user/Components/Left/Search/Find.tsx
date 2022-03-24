import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { t } from "i18next";
import React from "react";

export default function Find({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <>
      <Grid item>
        <LoadingButton loading={loading} onClick={onClick}>
          {t("form.search.find")}
        </LoadingButton>
      </Grid>
    </>
  );
}
