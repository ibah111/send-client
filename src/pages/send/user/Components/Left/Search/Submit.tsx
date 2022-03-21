import { Button, Grid } from "@mui/material";
import { t } from "i18next";
import updateExec from "../../../../../../api/updateExec";
import { useAppDispatch } from "../../../../../../Reducer";

export default function Submit() {
  const dispatch = useAppDispatch();
  const Click = () => {
    updateExec().then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <Grid item>
        <Button onClick={Click}>{t("form.search.submit")}</Button>
      </Grid>
    </>
  );
}
