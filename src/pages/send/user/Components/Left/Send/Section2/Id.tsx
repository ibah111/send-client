import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppSelector } from "../../../../../../../Reducer";

export default function Id() {
  const id = useAppSelector((state) => state.Send.id);
  return (
    <>
      <Grid item>
        <TextField label={t("form.send.id")} value={id===null?"":id} disabled />
      </Grid>
    </>
  );
}
