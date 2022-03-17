import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setCourtDate } from "../../../../../../../Reducer/Send";

export default function CourtDate() {
  const dispatch = useAppDispatch();
  const court_date = useAppSelector((state) => state.Send.court_date);
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <DatePicker
          label={t("form.send.court_date")}
          value={court_date}
          mask="__.__.____"
          onChange={(newValue: any) =>
            dispatch(setCourtDate(newValue?.toISOString()))
          }
          renderInput={(params) => <TextField required fullWidth {...params} />}
        />
      </Grid>
    </>
  );
}
