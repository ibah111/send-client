import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getDict from "../../../../../../api/getDict";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setExecutiveTyp } from "../../../../../../Reducer/Send";

export default function ExecutiveTyp() {
  const executive_typ = useAppSelector((state) => state.Send.executive_typ);
  const dispatch = useAppDispatch();
  const [types, setTypes] = React.useState<any[]>([]);
  React.useEffect(() => {
    getDict(124).then((dict) => setTypes(dict));
  }, []);
  return (
    <>
      <Grid sx={{ width: 600 }} item>
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
            <MenuItem value={""}>{t("system.none")}</MenuItem>
            {types.map((type, index) => (
              <MenuItem key={index} value={type.code}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
