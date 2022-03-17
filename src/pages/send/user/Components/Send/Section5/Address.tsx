import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import React from "react";
import getCourt from "../../../../../../api/getCourt";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";

export default function Address() {
  const dispatch = useAppDispatch();
  const [address, setAddress] = React.useState("");
  const r_court_id = useAppSelector((state) => state.Send.r_court_id);
  React.useEffect(() => {
    if (r_court_id > 0) {
      getCourt({ id: r_court_id }).then((court) => {
        setAddress(court[0].address);
      });
    } else {
      setAddress("");
    }
  }, [r_court_id]);
  return (
    <>
      <Grid sx={{ width: 410 }} item>
        <TextField
          fullWidth
          label={t("form.send.law_court.address")}
          value={address}
          disabled
        />
      </Grid>
    </>
  );
}
