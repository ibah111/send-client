import { Autocomplete, Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getCourt from "../../../../../../../api/getCourt";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setRCourtId } from "../../../../../../../Reducer/Send";

export default function RCourtId() {
  const r_court_id = useAppSelector((state) => state.Send.r_court_id);
  const dispatch = useAppDispatch();
  const [types, setTypes] = React.useState<any[]>([]);
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    getCourt({ name }).then((court) => {
      setTypes(court);
    });
  }, [name]);
  React.useEffect(() => {
    if (r_court_id > 0)
      getCourt({ id: r_court_id }).then((court) => {
        setTypes(court);
      });
  }, [r_court_id]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <Autocomplete
          disablePortal
          id="r_court_id"
          options={types}
          getOptionLabel={(option) => `(${option.id}) ${option.name}`}
          inputValue={name}
          onChange={(event, value) => {
            if (value) {
              dispatch(setRCourtId(value.id));
            } else {
              dispatch(setRCourtId(0));
            }
          }}
          isOptionEqualToValue={(option: any, value: any) =>
            option.id === value.id
          }
          onInputChange={(event, newInputValue) => {
            setName(newInputValue);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              error={r_court_id === 0}
              required
              label={t("form.send.r_court_id")}
            />
          )}
        />
      </Grid>
    </>
  );
}
