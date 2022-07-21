import { Grid } from "@mui/material";
import React from "react";
import CourtDate from "./CourtDate";
import DeliveryTyp from "./DeliveryTyp";
import TemplateTyp from "./TemplateTyp";

export default function Section1() {
  return (
    <>
      <Grid
        container
        item
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CourtDate />
        <DeliveryTyp />
        <TemplateTyp />
      </Grid>
    </>
  );
}
