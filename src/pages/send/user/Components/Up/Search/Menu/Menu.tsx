import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid, IconButton } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { enqueueSnackbar } from 'notistack';
import saveId from '../../../../../../../api/saveId';
import createIp from '../../../../../../../api/createIp';
import resetData from '../../../../../../../utils/resetData';

class Props {
  disabled: boolean;
}

export default function AdditionalMenu({ disabled }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item>
      <IconButton
        disabled={!disabled}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="small"
      >
        <SaveAsIcon color={!disabled ? 'inherit' : 'info'} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/**
         * сохранить
         */}
        <MenuItem
          onClick={() =>
            saveId().subscribe((result) => {
              if (Object.keys(result).length > 0) {
                resetData();
                if (result.law_act_response === true) {
                  enqueueSnackbar(
                    'Данные судебного иска/приказа были изменены',
                    {
                      variant: 'info',
                    },
                  );
                }
                if (result.law_exec_response === true) {
                  enqueueSnackbar(
                    'Данные исполнительного производства были изменены',
                    {
                      variant: 'info',
                    },
                  );
                }
              } else {
                enqueueSnackbar('Данные не были изменены', {
                  variant: 'info',
                });
              }
            })
          }
        >
          <SaveOutlinedIcon fontSize="small" /> {'Сохранить ИД'}
        </MenuItem>
        {/**
         * создать ип
         */}
        <MenuItem
          onClick={() =>
            createIp().subscribe((res) => {
              resetData();
              enqueueSnackbar('ИП создан', {
                variant: 'success',
              });
            })
          }
        >
          <EditOutlinedIcon fontSize="small" />
          {'Создать ИД'}
        </MenuItem>
      </Menu>
    </Grid>
  );
}
