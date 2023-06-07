import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';
import { logout } from '../../api/getToken';
import { useAppSelector } from '../../Reducer';
import { generateName } from '../../utils/generateName';
import server from '../../utils/server';
const portal = server('bitrix');
export default function Account() {
  const user = useAppSelector((state) => state.User);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Avatar src={`${portal}/${user.avatar}`} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <Avatar src={`${portal}/${user.avatar}`} />{' '}
          {generateName(user.firstname, user.secondname)}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            const data = new URLSearchParams();
            data.append('backurl', document.location.pathname);
            logout().then(() =>
              document.location.replace(
                portal + '/auth/?logout=yes&' + data.toString(),
              ),
            );
          }}
        >
          Выйти
        </MenuItem>
      </Menu>
    </Box>
  );
}
