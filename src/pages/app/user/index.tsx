import {
  Typography as T,
  Container,
  Grid,
  Button,
  Collapse,
  useTheme,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Account from '../../../components/Account';
import DarkButton from '../../../components/DarkButton';
import Slider from '../../../components/Slider';
import Version from '../../../components/Version';
import pages from '../../../utils/pages';
import version from '../../../utils/version';
import { createTheme } from './theme';

export default function Home() {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const themeAccount = React.useMemo(() => createTheme(theme), [theme]);
  return (
    <>
      <Slider position="down">
        <main>
          <Container maxWidth="sm">
            <Grid
              sx={{ height: '98vh' }}
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <ThemeProvider theme={themeAccount}>
                <Account />
              </ThemeProvider>
              <Grid item>
                <T sx={{ fontWeight: 600 }} variant="h1">
                  {t(version.title)}
                </T>
              </Grid>
              {pages.map(
                (page, index) =>
                  (Boolean(page.demo) == false ||
                    Boolean(page.demo) == version.demo) && (
                    <Collapse
                      unmountOnExit
                      key={index}
                      mountOnEnter
                      in={page.path !== location.pathname}
                    >
                      <Grid item>
                        <Button component={Link} to={page.path} variant="text">
                          {t(page.name)}
                        </Button>
                      </Grid>
                    </Collapse>
                  ),
              )}
              <Collapse unmountOnExit key={'mode'} mountOnEnter in={true}>
                <Grid item>
                  <DarkButton />
                </Grid>
              </Collapse>
              <Grid item>
                <Version />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Slider>
    </>
  );
}
