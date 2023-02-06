import { Address } from '@contact/models';
import { Button } from '@mui/material';
import {
  DataGridPremium,
  GridToolbarContainer,
} from '@mui/x-data-grid-premium';
import React from 'react';
import { useTranslation } from 'react-i18next';
import getDebtGuarantorAddress from '../../../../../../api/getDebtGuarantorAddress';
import updateDebtGuarantorAddress from '../../../../../../api/updateDebtGuarantorAddress';
import asyncMemo from '../../../../../../utils/asyncMemo';
import { useDgSelector } from '../Reducer';
import useData from '../useData';
import getColumns from './columns';
import Form from './Form';
interface CustomToolbar {
  onCreate: () => void;
}
function CustomToolbar({ onCreate }: CustomToolbar) {
  const { t } = useTranslation();
  return (
    <GridToolbarContainer>
      <Button onClick={() => onCreate()}>{t('form.address.create')}</Button>
    </GridToolbarContainer>
  );
}
export default function AddressGrid() {
  const columns = React.useMemo(() => getColumns(), []);
  const { value: id } = useData('id');
  const { value: debt_id } = useData('parent_id');
  const [address, setAddress] = React.useState<Address>();
  const [open, setOpen] = React.useState(false);
  const rows = asyncMemo(
    () => (id ? getDebtGuarantorAddress(id as number) : undefined),
    [id, open],
  );
  return (
    <div style={{ display: 'flex', height: 300 }}>
      <DataGridPremium
        columns={columns}
        components={{ Toolbar: CustomToolbar }}
        componentsProps={{
          toolbar: {
            onCreate() {
              setAddress(undefined);
              setOpen(true);
            },
          },
        }}
        rows={rows || []}
        onCellDoubleClick={(params) => {
          setAddress(params.row);
          setOpen(true);
        }}
      />
      {open && (
        <Form
          address={address}
          debt_id={debt_id as number}
          r_debt_guarantor={id as number}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
