import { DatePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setEntryForceDt } from "../../../../../../../Reducer/Send";

export default function EntryForceDt() {
  const dispatch = useAppDispatch();
  const entry_force_dt = useAppSelector((state) => state.Send.entry_force_dt);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <DatePicker
          label={t("form.send.entry_force_dt")}
          value={entry_force_dt}
          mask="__.__.____"
          onChange={(newValue: any) =>
            dispatch(setEntryForceDt(newValue ? newValue.toISOString() : ""))
          }
          renderInput={(params) => <TextField required fullWidth {...params} />}
        />
      </Grid>
    </>
  );
}
