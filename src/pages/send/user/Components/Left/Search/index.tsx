import { Grid } from "@mui/material";
import React from "react";
import getLawExec from "../../../../../../api/getLawExec";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { reset, setSend } from "../../../../../../Reducer/Send";
import Contract from "./Contract";
import CreateExec from "./CreateExec";
import Name from "./Name";
import Find from "./Find";

export default function Search() {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.Send.id);
  React.useEffect(() => {
    dispatch(reset());
    getLawExec(id).then((res) => {
      if (res !== null) dispatch(setSend(res));
    });
  }, [id]);
  return (
    <>
      <Grid
        item
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Name />
        <Contract />
        <Find />
        <CreateExec />
      </Grid>
    </>
  );
}
