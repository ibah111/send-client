import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getDict from "../../../../../../../api/getDict";
import getData from "../../../../../../../utils/getData";

export default function ExecutiveTyp() {
  const [types, setTypes] = React.useState<any[]>([]);
  const data = getData("executive_typ", "string");
  React.useEffect(() => {
    getDict(124).then((dict) => setTypes(dict));
  }, []);
  return (
    <>
      <Grid sx={{ width: 555 }} item>
        <FormControl error={data.isInvalid} fullWidth>
          <InputLabel id="executive_typ">
            {t("form.send.executive_typ")}
          </InputLabel>
          <Select
            required
            value={data.value}
            onChange={(event) => {
              data.setValue(event.target.value);
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
