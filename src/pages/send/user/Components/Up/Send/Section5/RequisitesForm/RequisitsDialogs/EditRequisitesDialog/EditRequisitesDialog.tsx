import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';
import React from 'react';
import RequisitesForm from '../../RequisitesForm';
import updateBankRequisites from '../../../../../../../../../../api/BankRequisites/updateBankRequisites';
import { useAppSelector } from '../../../../../../../../../../Reducer';
import getOneBankRequisites from '../../../../../../../../../../api/BankRequisites/getOneBankRequisites';
import useRequisitesData from '../../../../../../../../../../hooks/useRequisitesData';

interface EditDialogProps {
  open: boolean;
  onClose: VoidFunction;
  id: number;
}

export default function EditRequisitesDialog({
  open,
  onClose,
  id,
}: EditDialogProps) {
  const data = useAppSelector((state) => state.Requisites);
  //-----------------------------------------------------//
  const bik = useAppSelector((state) => state.Requisites.bik);
  const name = useAppSelector((state) => state.Requisites.name);
  const recipient = useAppSelector((state) => state.Requisites.recipient);
  const br_name = useAppSelector((state) => state.Requisites.br_name);
  const r_account = useAppSelector((state) => state.Requisites.r_account);
  const k_account = useAppSelector((state) => state.Requisites.k_account);
  const inn = useAppSelector((state) => state.Requisites.inn);
  const kpp = useAppSelector((state) => state.Requisites.kpp);
  const pay_purpose = useAppSelector((state) => state.Requisites.pay_purpose);
  const br_address = useAppSelector((state) => state.Requisites.br_address);
  const typ = useAppSelector((state) => state.Requisites.typ);
  const kbe = useAppSelector((state) => state.Requisites.kbe);
  const knp = useAppSelector((state) => state.Requisites.knp);
  const kod = useAppSelector((state) => state.Requisites.kod);
  //-----------------------------------------------------//
  const data_name = useRequisitesData('name', { name });
  const data_recipient = useRequisitesData('recipient', { recipient });
  const data_bik = useRequisitesData('bik', { bik });
  const data_br_name = useRequisitesData('br_name', {
    br_name,
  });
  const data_r_account = useRequisitesData('r_account', {
    r_account,
  });
  const data_k_account = useRequisitesData('k_account', {
    k_account,
  });
  const data_inn = useRequisitesData('inn', {
    inn,
  });
  const data_kpp = useRequisitesData('kpp', {
    kpp,
  });
  const data_typ = useRequisitesData('typ', {
    typ,
  });
  const data_br_address = useRequisitesData('br_address', {
    br_address,
  });
  const data_pay_purpose = useRequisitesData('pay_purpose', {
    pay_purpose,
  });
  const data_kbe = useRequisitesData('kbe', {
    kbe,
  });
  const data_kod = useRequisitesData('kod', {
    kod,
  });
  const data_knp = useRequisitesData('knp', {
    knp,
  });
  //-----------------------------------------------------//
  React.useEffect(() => {
    if (id > 0) {
      getOneBankRequisites(id).subscribe((result) => {
        data_bik.onChange(result.bik);
        data_name.onChange(result.name);
        data_recipient.onChange(result.recipient);
        data_br_name.onChange(result.br_name);
        data_r_account.onChange(result.r_account);
        data_k_account.onChange(result.k_account);
        data_inn.onChange(result.inn);
        data_kpp.onChange(result.kpp);
        data_typ.onChange(result.typ);
        data_br_address.onChange(result.br_address);
        data_pay_purpose.onChange(result.pay_purpose);
        data_kbe.onChange(result.kbe);
        data_kod.onChange(result.kod);
        data_knp.onChange(result.knp);
      });
    }
  }, [
    data_bik,
    data_br_address,
    data_br_name,
    data_inn,
    data_k_account,
    data_kbe,
    data_knp,
    data_kod,
    data_kpp,
    data_name,
    data_pay_purpose,
    data_r_account,
    data_recipient,
    data_typ,
    id,
  ]);
  //-----------------------------------------------------//
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={'xl'}
        sx={{ width: '100%', height: '100%' }}
      >
        <DialogTitle>Редактирование реквизита</DialogTitle>
        <Divider />
        <DialogContent>
          <RequisitesForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="contained" color="error">
            Отмена
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              updateBankRequisites(id, {
                ...data,
              });
            }}
          >
            Принять изменения
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
