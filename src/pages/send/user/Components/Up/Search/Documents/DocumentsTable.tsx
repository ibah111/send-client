import { DocAttach, User } from '@contact/models';
import { Box } from '@mui/material';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import { lookup } from 'mime-types';
import React from 'react';
import getDocuments from '../../../../../../../api/getDocuments';
import { useAppDispatch, useAppSelector } from '../../../../../../../Reducer';
import { setDocumentsState } from '../../../../../../../Reducer/StateResults';
import DialogFile from './DialogFile';
import getColumns from './getColumns';
interface DocumentsTableProps {
  id: number;
}
export default function DocumentsTable({ id }: DocumentsTableProps) {
  const [columns] = React.useState(getColumns());
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<Blob | null>(null);
  const stateGrid = useAppSelector((state) => state.StateResults.documents);
  const apiRef = useGridApiRef();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState<DocAttach[]>([]);
  React.useEffect(() => {
    getDocuments(id, 'law_exec').then((res) => {
      setRows(res);
    });
    apiRef.current.restoreState(stateGrid);
  }, []);
  return (
    <>
      <DialogFile
        file={file}
        open={open}
        onClose={() => {
          setOpen(false);
          setFile(null);
        }}
      />
      <Box sx={{ width: '100%', height: 400 }}>
        <DataGridPremium
          apiRef={apiRef}
          onStateChange={() => {
            dispatch(setDocumentsState(apiRef.current.exportState()));
          }}
          columns={columns}
          onCellDoubleClick={(params) => {
            getDocuments(Number(params.id), 'doc').then((res) => {
              setFile(
                new Blob([res], { type: String(lookup(params.row.name)) }),
              );
              setOpen(true);
            });
          }}
          rows={rows}
        />
      </Box>
    </>
  );
}
