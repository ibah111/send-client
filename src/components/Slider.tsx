import { Box, Grid, Slide } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import SliderData from "../providers/SliderData";

export default function Slider({
  stop = false,
  always = false,
  children,
  position = "up",
}: any) {
  const [open, setOpen] = React.useState(false);
  const { minApp, timeout } = React.useContext(SliderData);
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
