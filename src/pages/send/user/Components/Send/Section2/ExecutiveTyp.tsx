import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setExecutiveTyp } from "../../../../../../Reducer/Send";

export default function ExecutiveTyp() {
  const executive_typ = useAppSelector((state) => state.Send.executive_typ);
  const dispatch = useAppDispatch();
  return (
    <>
      <Grid sx={{ width: 150 }} item>
        <FormControl fullWidth>
          <InputLabel id="executive_typ">
            {t("form.send.executive_typ")}
          </InputLabel>
          <Select
            required
            error={executive_typ === 0}
            value={executive_typ > 0 ? executive_typ : ""}
            onChange={(event) => {
              dispatch(
                setExecutiveTyp(event.target.value ? event.target.value : 0)
              );
            }}
            label={t("form.send.executive_typ")}
          >
            <MenuItem value={""}>None</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
