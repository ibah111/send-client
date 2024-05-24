import { DocAttach } from '@contact/models';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../../Reducer';
import { setDocumentsState } from '../../../../../../../Reducer/StateResults';
import BackDrop from './BackDrop';
import DialogFile from './DialogFile';
import getLawActColumns from './getLawActColumns';
import getLawActDocuments from '../../../../../../../api/getLawActDocuments';
import { enqueueSnackbar } from 'notistack';
interface DocumentsTableProps {
  law_act_id: number;
}
/**
 * Документы law_act
 */
export default function LawActDocumentsTable({
  law_act_id,
}: DocumentsTableProps) {
  const refresh = React.useCallback(() => {
    const sub = getLawActDocuments(law_act_id).subscribe((res) => {
      enqueueSnackbar('Поиск по law_act успешен', {
        variant: 'success',
      });
      setRows(res);
    });
    return sub.unsubscribe.bind(sub);
  }, [law_act_id]);
  const [columns] = React.useState(getLawActColumns(refresh));
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<number | null>(null);
  const stateGrid = useAppSelector((state) => state.StateResults.documents);
  const apiRef = useGridApiRef();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState<DocAttach[]>([]);
  React.useEffect(() => {
    apiRef.current.restoreState(stateGrid);
    return refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, refresh]);
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
      <BackDrop id={law_act_id} refresh={refresh}>
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
          slotProps={{
            cell: {
              disableDragEvents: true,
            },
          }}
          disableRowSelectionOnClick
          onCellDoubleClick={(params, event) => {
            event.defaultMuiPrevented = true;
            const law_act_doc_attach_id = params.id as number;
            setFile(law_act_doc_attach_id);
            setOpen(true);
          }}
          rows={rows}
        />
      </BackDrop>
    </>
  );
}
