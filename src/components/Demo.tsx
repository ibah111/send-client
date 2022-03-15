import { TextField } from "@mui/material";
import React from "react";
import User from "../providers/User";
import version from "../utils/version";
export default function Demo() {
  const { token, setToken } = React.useContext(User);
  return (
    <>
      {version.demo && (
        <TextField
          size="small"
          InputLabelProps={{ shrink: true }}
          label="Пользователь"
          onChange={(event: any) => {
            setToken(event.target.value);
          }}
          value={token}
          type="Number"
          variant="standard"
        />
      )}
    </>
  );
}
