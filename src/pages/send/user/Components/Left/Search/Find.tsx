import { Button, Grid } from "@mui/material";
import { t } from "i18next";
import search from "../../../../../../api/search";
import { useAppDispatch } from "../../../../../../Reducer";
import { setResults } from "../../../../../../Reducer/Results";

export default function Find() {
  const dispatch = useAppDispatch();
  const Click = () => {
    search().then((res) => {
      dispatch(setResults(res));
    });
  };
  return (
    <>
      <Grid item>
        <Button onClick={Click}>{t("form.search.find")}</Button>
      </Grid>
    </>
  );
}
