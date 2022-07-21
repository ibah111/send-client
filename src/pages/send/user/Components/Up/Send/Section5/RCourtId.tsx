import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import getCourt from "../../../../../../../api/getCourt";
import getData from "../../../../../../../utils/getData";

export default function RCourtId() {
  const { t } = useTranslation();
  const [types, setTypes] = React.useState<any[]>([""]);
  const [type, setType] = React.useState<any>("");
  const [name, setName] = React.useState("");
  const data = getData("r_court_id", "null");
  React.useEffect(() => {
    if (name[0] !== "(") {
      getCourt({ name: name === t("system.none") ? "" : name }).then(
        (court) => {
          setTypes(["", ...court]);
        }
      );
    }
  }, [name]);
  React.useEffect(() => {
    if (data.value !== "") {
      getCourt({ id: data.value as number }).then((court) => {
        setTypes(["", ...court]);
        setType(court[0]);
      });
    } else {
      setTypes([""]);
      setType("");
    }
  }, [data.value]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <Autocomplete
          disablePortal
          id="r_court_id"
          options={types}
          value={type}
          getOptionLabel={(option) =>
            option !== "" ? `(${option.id}) ${option.name}` : t("system.none")
          }
          inputValue={name}
          onChange={(event, value) => {
            if (value) {
              data.setValue(value.id);
            } else {
              data.setValue("");
            }
          }}
          isOptionEqualToValue={(option: any, value: any) =>
            option === "" && value === "" ? true : option?.id === value?.id
          }
          onInputChange={(event, newInputValue) => {
            setName(newInputValue);
          }}
          fullWidth
          renderInput={(params: any) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                value:
                  params.inputProps.value === t("system.none")
                    ? ""
                    : params.inputProps.value,
              }}
              error={data.isInvalid}
              required
              label={t("form.send.r_court_id")}
            />
          )}
        />
      </Grid>
    </>
  );
}
