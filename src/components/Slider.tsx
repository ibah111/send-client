import { Grid, Slide } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../Reducer';
interface SliderProps {
  stop?: boolean;
  always?: boolean;
  children: React.ReactNode;
  position?: 'up' | 'left' | 'right' | 'down';
}
export default function Slider({
  stop = false,
  always = false,
  children,
  position = 'up',
}: SliderProps) {
  const [open, setOpen] = React.useState(false);
  const minApp = useAppSelector((state) => state.App.minApp),
    timeout = useAppSelector((state) => state.App.timeout);
  React.useEffect(() => {
    setOpen(stop ? false : always ? true : minApp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
