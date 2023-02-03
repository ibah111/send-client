import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getDebtGuarantor from '../../../../../api/getDebtGuarantor';
import DialogPhysics from './DialogPhysics';
import ExtId from './ExtId';
import Finance from './Finance';
import Fio from './Fio';
import { setDebtGuarantor, useDgDispatch } from './Reducer';
import SelectRole from './SelectRole';
import SelectTyp from './SelectTyp';
import Submit from './Submit';
import useData from './useData';
interface FormProps {
  id?: number;
}
export default function Form({ id }: FormProps) {
  const dispatch = useDgDispatch();
  const { t } = useTranslation();
  React.useEffect(() => {
    if (id) {
      getDebtGuarantor(id).then((res) => {
        dispatch(setDebtGuarantor(res));
      });
    }
  }, [id]);
  const data = useData('id');
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
          <Grid item xs={1}>
            <TextField
              label={t('form.debt_guarantor.id')}
              value={data.value}
              disabled
            />
          </Grid>
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
      <DialogActions>
        <Submit />
      </DialogActions>
    </>
  );
}
