import { DialogContent, DialogTitle, Grid } from '@mui/material';
import DialogPhysics from './DialogPhysics';
import ExtId from './ExtId';
import Fio from './Fio';
import SelectRole from './SelectRole';
import SelectTyp from './SelectTyp';

export default function Form() {
  return (
    <>
      <DialogTitle>Редактирование поручителя</DialogTitle>
      <DialogContent>
        <Grid spacing={1} direction="row" container>
          <Fio />
          <SelectTyp />
          <SelectRole />
          <ExtId />
        </Grid>
        <DialogPhysics />
      </DialogContent>
    </>
  );
}
