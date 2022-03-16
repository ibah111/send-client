import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "./Slider";
import { Button, Collapse, Grid, Typography } from "@mui/material";
import pages from "../utils/pages";
import { Link } from "react-router-dom";
import Demo from "./Demo";
import version from "../utils/version";

export default function AccountMenu({ stop, always }: any) {
  return (
    <React.Fragment>
      <Slider stop={stop} always={always} position="down">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs="auto"
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid xs="auto" item>
                <Typography sx={{ fontWeight: 600 }} variant="h5">
                  ОТПРАВКА
                </Typography>
              </Grid>
              {pages.map(
                (page, index) =>
                  (!page?.demo ||
                  version?.demo) && (
                    <Collapse
                      key={index}
                      unmountOnExit
                      mountOnEnter
                      orientation="horizontal"
                      in={page.path !== location.pathname}
                    >
                      <Grid xs="auto" item>
                        <Button component={Link} to={page.path} variant="text">
                          {page.name}
                        </Button>
                      </Grid>
                    </Collapse>
                  )
              )}
            </Grid>
            <Grid
              xs="auto"
              item
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid xs="auto" item>
                <Demo />
              </Grid>
              {pages.map(
                (page, index) =>
                  page?.root && (
                    <Collapse
                      key={index}
                      unmountOnExit
                      mountOnEnter
                      orientation="horizontal"
                      in={page.path === location.pathname}
                    >
                      <Grid xs="auto" item>
                        <Typography>{page.name}</Typography>
                      </Grid>
                    </Collapse>
                  )
              )}
            </Grid>
          </Grid>
        </Box>
      </Slider>
    </React.Fragment>
  );
}
