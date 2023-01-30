import { DialogContent, DialogTitle, Grid } from '@mui/material';
import DialogPhysics from './DialogPhysics';
import ExtId from './ExtId';
import Finance from './Finance';
import Fio from './Fio';
import SelectRole from './SelectRole';
import SelectTyp from './SelectTyp';

export default function Form() {
  return (
    <>
      <DialogTitle>Редактирование поручителя</DialogTitle>
      <DialogContent>
        <Grid
          container
          width="100%"
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Fio />
          <SelectTyp />
          <SelectRole />
          <ExtId />
        </Grid>
        <Grid
          width="100%"
          container
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="flex-start"
        >
          <DialogPhysics />
          <Finance />
        </Grid>
      </DialogContent>
    </>
  );
}
