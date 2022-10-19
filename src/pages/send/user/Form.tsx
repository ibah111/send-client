import { Box, Grid } from '@mui/material';
import Up from './Components/Up';
import Down from './Components/Down';
import React from 'react';

export default function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Up />
          <Down />
        </Grid>
      </Box>
    </>
  );
}
