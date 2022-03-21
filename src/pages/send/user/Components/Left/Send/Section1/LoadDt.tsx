import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setLoadDt } from "../../../../../../../Reducer/Send";

export default function LoadDt() {
  const dispatch = useAppDispatch();
  const load_dt = useAppSelector((state) => state.Send.load_dt);
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <DatePicker
          label={t("form.send.load_dt")}
          value={load_dt}
          mask="__.__.____"
          onChange={(newValue: any) =>
            dispatch(setLoadDt(newValue ? newValue.toISOString() : null))
          }
          renderInput={(params) => (
            <TextField
              required
              fullWidth
              {...params}
              error={load_dt === null}
            />
          )}
        />
      </Grid>
    </>
  );
}
