import { TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../Reducer';
import { setToken } from '../Reducer/User';
import version from '../utils/version';
export default function Demo() {
  const token = useAppSelector((state) => state.User.token);
  const dispatch = useAppDispatch();
  return (
    <>
      {version.demo && (
        <TextField
          size="small"
          InputLabelProps={{ shrink: true }}
          label="Пользователь"
          onChange={(event: any) => {
            dispatch(setToken(event.target.value));
          }}
          value={token}
          type="Number"
          variant="standard"
        />
      )}
    </>
  );
}
