import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setFsspDate } from "../../../../../../../Reducer/Send";

export default function FsspDate() {
  const dispatch = useAppDispatch();
  const fssp_date = useAppSelector((state) => state.Send.fssp_date);
  return (
    <>
      <Grid item>
        <DatePicker
          label={t("form.send.fssp_date")}
          value={fssp_date}
          mask="__.__.____"
          onChange={(newValue: any) =>
            dispatch(setFsspDate(newValue ? newValue.toISOString() : null))
          }
          renderInput={(params) => (
            <TextField
              required
              fullWidth
              {...params}
              error={fssp_date === null}
            />
          )}
        />
      </Grid>
    </>
  );
}
