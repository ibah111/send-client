import { Popover, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { LawActPlain } from '../../../../api/getLawAct';
import { LawExecPlain } from '../../../../api/search';
export default function PopoverHook(rows: (LawExecPlain | LawActPlain)[]) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [value, setValue] = React.useState('');

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const field = event.currentTarget.dataset.field;
    if (field === 'Address') {
      const id = event.currentTarget.parentElement?.dataset.id;
      const row = rows.find((r) => r.id === Number(id));
      if (row)
        setValue(
          row['Person.Addresses']?.[0]?.full_adr
            ? row['Person.Addresses']?.[0]?.full_adr
            : `АДРЕС НЕ ЗАПОЛЕН. НАДО НАЙТИ ДОЛГ ПО ID = ${row['Debt.id']}`,
        );

      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const ElementPopover = useCallback(() => {
    return (
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{value}</Typography>
      </Popover>
    );
  }, [open, anchorEl, value]);
  return {
    handlePopoverOpen,
    handlePopoverClose,
    ElementPopover,
  };
}
