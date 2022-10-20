import { DocAttach } from '@contact/models';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import { lookup } from 'mime-types';
import React from 'react';
import getDocuments from '../../../../../../../api/getDocuments';
import { useAppDispatch, useAppSelector } from '../../../../../../../Reducer';
import { setDocumentsState } from '../../../../../../../Reducer/StateResults';
import BackDrop from './BackDrop';
import DialogFile from './DialogFile';
import getColumns from './getColumns';
interface DocumentsTableProps {
  id: number;
}
export default function DocumentsTable({ id }: DocumentsTableProps) {
  const refresh = React.useCallback(
    () =>
      getDocuments(id, 'law_exec').then((res) => {
        setRows(res);
      }),
    [id],
  );
  const [columns] = React.useState(getColumns(refresh));
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<Blob | null>(null);
  const stateGrid = useAppSelector((state) => state.StateResults.documents);
  const apiRef = useGridApiRef();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState<DocAttach[]>([]);
  React.useEffect(() => {
    refresh();
    apiRef.current.subscribeEvent('columnHeaderDragEnter', (_, e) => {
      console.log(e);
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
      <BackDrop id={id} refresh={refresh}>
        <DataGridPremium
          apiRef={apiRef}
          onStateChange={() => {
            dispatch(setDocumentsState(apiRef.current.exportState()));
          }}
          sx={{
            cursor: 'default',
            userSelect: 'none',
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
          }}
          columns={columns}
          disableColumnReorder
          componentsProps={{
            cell: {
              disableDragEvents: true,
            },
          }}
          disableSelectionOnClick
          onCellDoubleClick={(params, event) => {
            event.defaultMuiPrevented = true;
            getDocuments(Number(params.id), 'doc').then((res) => {
              setFile(
                new Blob([res], { type: String(lookup(params.row.name)) }),
              );
              setOpen(true);
            });
          }}
          rows={rows}
        />
      </BackDrop>
    </>
  );
}
