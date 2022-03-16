import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setName } from "../../../../../Reducer/Search";

export default function Name() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.Search.name);
  return (
    <>
      <Grid item>
        <TextField
          label={t("form.search.name")}
          value={name}
          onChange={(event) => dispatch(setName(event.target.value))}
        />
      </Grid>
    </>
  );
}
