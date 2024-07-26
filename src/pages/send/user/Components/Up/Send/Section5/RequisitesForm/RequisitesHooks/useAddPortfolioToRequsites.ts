import React from 'react';
import {
  SectionFiveEventDialog,
  SectionFiveEvents,
} from '../RequisitesTableDialog';

interface useDialogProps {
  DialogTarget: EventTarget;
  onClose?: () => void;
}

export default function useRequisitesDialog({
  DialogTarget,
  onClose,
}: useDialogProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [idValue, setValueId] = React.useState<number>(0);
  React.useEffect(() => {
    const callback = ((e: SectionFiveEventDialog) => {
      const dialogValue = e.value as number;
      setOpen(true);
      setValueId(dialogValue);
    }) as EventListener;
    DialogTarget.addEventListener(
      SectionFiveEvents.openRequisitesAddPortfoliosToRequisitesDialog,
      callback,
    );
    return () => {
      DialogTarget.removeEventListener(
        SectionFiveEvents.openRequisitesAddPortfoliosToRequisitesDialog,
        callback,
      );
    };
  }, [DialogTarget]);

  const closeDialog = React.useCallback(() => {
    setOpen(false);
    setValueId(0);
    onClose?.();
  }, [onClose]);

  return { open, idValue, closeDialog };
}
