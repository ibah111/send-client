import { Button, Grid } from "@mui/material";
import { t } from "i18next";
import React from "react";
import CreateLawExec from "../../CreateLawExec";

export default function CreateExec() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Grid item>
        <Button onClick={() => setOpen(true)}>
          {t("form.search.create_exec")}
        </Button>
        {open && (
          <CreateLawExec open={open} handleClose={() => setOpen(false)} />
        )}
      </Grid>
    </>
  );
}
