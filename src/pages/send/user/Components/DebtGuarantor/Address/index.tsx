import { DataGridPremium } from '@mui/x-data-grid-premium';
import React from 'react';
import getDebtGuarantorAddress from '../../../../../../api/getDebtGuarantorAddress';
import asyncMemo from '../../../../../../utils/asyncMemo';
import useData from '../useData';
import getColumns from './columns';

export default function AddressGrid() {
  const columns = React.useMemo(() => getColumns(), []);
  const { value: id } = useData('id');
  const rows = asyncMemo(
    () => (id ? getDebtGuarantorAddress(id as number) : undefined),
    [id],
  );
  return (
    <div style={{ display: 'flex', height: 300 }}>
      <DataGridPremium columns={columns} rows={rows || []} />
    </div>
  );
}
