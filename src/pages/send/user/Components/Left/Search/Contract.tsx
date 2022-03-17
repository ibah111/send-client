import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setContract } from "../../../../../../Reducer/Search";

export default function Contract() {
  const dispatch = useAppDispatch();
  const contract = useAppSelector((state) => state.Search.contract);
  return (
    <>
      <Grid item>
        <TextField
          label={t("form.search.contract")}
          value={contract}
          onChange={(event) => dispatch(setContract(event.target.value))}
        />
      </Grid>
    </>
  );
}
