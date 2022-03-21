import { Autocomplete, Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getCourt from "../../../../../../../api/getCourt";
import { useAppDispatch, useAppSelector } from "../../../../../../../Reducer";
import { setRCourtId } from "../../../../../../../Reducer/Send";

export default function RCourtId() {
  const r_court_id = useAppSelector((state) => state.Send.r_court_id);
  const dispatch = useAppDispatch();
  const [types, setTypes] = React.useState<any[]>([""]);
  const [type, setType] = React.useState<any>("");
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    if (name[0] !== "(") {
      getCourt({ name }).then((court) => {
        setTypes(["", ...court]);
      });
    }
  }, [name]);
  React.useEffect(() => {
    if (r_court_id !== null) {
      getCourt({ id: r_court_id }).then((court) => {
        setTypes(["", ...court]);
        setType(court[0]);
      });
    } else {
      setTypes([""]);
      setType("");
    }
  }, [r_court_id]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <Autocomplete
          disablePortal
          id="r_court_id"
          options={types}
          value={type}
          getOptionLabel={(option) =>
            option !== "" ? `(${option.id}) ${option.name}` : "Не выбрано"
          }
          inputValue={name}
          onChange={(event, value) => {
            if (value) {
              dispatch(setRCourtId(value.id));
            } else {
              dispatch(setRCourtId(null));
            }
          }}
          isOptionEqualToValue={(option: any, value: any) =>
            option === "" && value === "" ? true : option?.id === value?.id
          }
          onInputChange={(event, newInputValue) => {
            setName(newInputValue);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              error={r_court_id === null}
              required
              label={t("form.send.r_court_id")}
            />
          )}
        />
      </Grid>
    </>
  );
}
