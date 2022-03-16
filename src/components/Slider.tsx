import { Grid, Slide } from "@mui/material";
import React from "react";
import { useAppSelector } from "../Reducer";

export default function Slider({
  stop = false,
  always = false,
  children,
  position = "up",
}: any) {
  const [open, setOpen] = React.useState(false);
  const minApp = useAppSelector((state) => state.App.minApp),
    timeout = useAppSelector((state) => state.App.timeout);
  React.useEffect(() => {
    setOpen(stop ? false : always ? true : minApp);
  }, [minApp]);
  return (
    <Slide
      direction={position}
      in={open}
      timeout={timeout}
      mountOnEnter
      unmountOnExit
    >
      <Grid
        width="100%"
        container
        justifyContent="center"
        alignItems="center"
        item
      >
        {children}
      </Grid>
    </Slide>
  );
}
