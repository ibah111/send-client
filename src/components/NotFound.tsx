import { Grid, Typography } from '@mui/material';
import React from 'react';
import Slider from './Slider';

export default function NotFound() {
  return (
    <>
      <Slider>
        <Grid
          height={'98vh'}
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1">Страница не найдена</Typography>
          </Grid>
        </Grid>
      </Slider>
    </>
  );
}
