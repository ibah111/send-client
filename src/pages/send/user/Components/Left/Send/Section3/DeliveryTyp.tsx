import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getDict from "../../../../../../../api/getDict";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setDeliveryTyp } from "../../../../../../../Reducer/Send";

export default function ExecutiveTyp() {
  const executive_typ = useAppSelector((state) => state.Send.DELIVERY_TYP);
  const dispatch = useAppDispatch();
  const [types, setTypes] = React.useState<any[]>([]);
  React.useEffect(() => {
    getDict(16).then((dict) => setTypes(dict));
  }, []);
  return (
    <>
      <Grid sx={{ width: 220 }} item>
        <FormControl fullWidth>
          <InputLabel id="delivery_typ">
            {t("form.send.delivery_typ")}
          </InputLabel>
          <Select
            required
            error={executive_typ === null}
            value={executive_typ === null ? "" : executive_typ}
            onChange={(event) => {
              dispatch(
                setDeliveryTyp(event.target.value ? event.target.value : 0)
              );
            }}
            label={t("form.send.delivery_typ")}
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
