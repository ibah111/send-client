import { Grid, TextField } from '@mui/material';
import NameTextField from './RequisitesFormTextFields/NameTextField';
import RecipientTextField from './RequisitesFormTextFields/RecipientTextField';
import BrNameTextField from './RequisitesFormTextFields/BrNameTextField';
import InnTextField from './RequisitesFormTextFields/InnTextfield';
import KppTextField from './RequisitesFormTextFields/KppTextField';
import RAccountTextField from './RequisitesFormTextFields/RAccountTextField';
import BikTextField from './RequisitesFormTextFields/BikTextfield';
import PayPurposeTextField from './RequisitesFormTextFields/PayPurposeTextField';
import BrAddressTextField from './RequisitesFormTextFields/BrAdressTextField';
import TypTextField from './RequisitesFormTextFields/TypTextField';

export default function RequisitesForm() {
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item container spacing={1}>
          <Grid item xs={4}>
            <NameTextField />
          </Grid>
          <Grid item xs={4}>
            <RecipientTextField />
          </Grid>
          <Grid item xs={4}>
            <BrNameTextField />
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={4}>
            <InnTextField />
          </Grid>
          <Grid item xs={4}>
            <KppTextField />
          </Grid>
          <Grid item xs={4}>
            <RAccountTextField />
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={4}>
            <BikTextField />
          </Grid>
          <Grid item xs={4}>
            <BikTextField />
          </Grid>
          <Grid item xs={4}>
            <PayPurposeTextField />
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={5}>
            <BrAddressTextField />
          </Grid>
          <Grid item xs={1}>
            <TypTextField />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="КБЕ"></TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="КНП"></TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="КОД"></TextField>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
