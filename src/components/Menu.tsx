import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from './Slider';
import { Button, Collapse, Grid, Typography } from '@mui/material';
import pages from '../utils/pages';
import { Link, useLocation } from 'react-router-dom';
import version from '../utils/version';
import { useTranslation } from 'react-i18next';
import Version from './Version';
import DarkButton from './DarkButton';
interface AccountMenuProps {
  stop: boolean;
  always: boolean;
}
export default function AccountMenu({ stop, always }: AccountMenuProps) {
  const { t } = useTranslation();
  const location = useLocation();
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
                  {t(version.title)}
                </Typography>
              </Grid>
              {pages.map(
                (page, index) =>
                  (!page?.demo || version?.demo) && (
                    <Collapse
                      key={index}
                      unmountOnExit
                      mountOnEnter
                      orientation="horizontal"
                      in={page.path !== location.pathname}
                    >
                      <Grid xs="auto" item>
                        <Button component={Link} to={page.path} variant="text">
                          {t(page.name)}
                        </Button>
                      </Grid>
                    </Collapse>
                  ),
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
              <Grid item>
                <DarkButton />
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
                        <Typography>{t(page.name)}</Typography>
                      </Grid>
                    </Collapse>
                  ),
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Version minimize />
          </Grid>
        </Box>
      </Slider>
    </React.Fragment>
  );
}
