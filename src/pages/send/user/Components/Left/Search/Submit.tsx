import { Button, Grid } from "@mui/material";
import { t } from "i18next";
import updateExec from "../../../../../../api/updateExec";
import { useAppDispatch } from "../../../../../../Reducer";
import { reset, setId } from "../../../../../../Reducer/Send";

export default function Submit() {
  const dispatch = useAppDispatch();
  const Click = () => {
    dispatch(setId(0));
    dispatch(reset());
    updateExec().then((res) => {
      if (res) {
        dispatch(setId(0));
        dispatch(reset());
      }
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
