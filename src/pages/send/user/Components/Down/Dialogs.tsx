import React from 'react';
import Canceled from './Canceled';
import YesOrNo from './YesOrNo';

export default function Dialogs({
  open,
  onClose,
  row,
}: {
  open: boolean;
  onClose: () => void;
  row: any;
}) {
  const [openYesOrNo, setOpenYesOrNo] = React.useState(false);
  const [openCanceled, setOpenCanceled] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      if (row['Debt.status'] === 7) {
        setOpenCanceled(true);
      } else {
        setOpenYesOrNo(true);
      }
    } else {
      setOpenYesOrNo(false);
      setOpenCanceled(false);
    }
  }, [open]);
  return (
    <>
      <Canceled
        open={openCanceled}
        onClose={onClose}
        row={row}
        next={() => {
          setOpenCanceled(false);
          setOpenYesOrNo(true);
        }}
      />
      <YesOrNo open={openYesOrNo} onClose={onClose} row={row} />
    </>
  );
}
