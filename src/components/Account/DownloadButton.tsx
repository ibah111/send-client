import { Button, Menu, MenuItem, MenuList } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default function DownloadButton() {
  const url = 'https://git.usb.ru/api/v4/projects/';
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const [tags, setTags] = React.useState<string[]>([]);
  const baseRequest = axios.create({
    baseURL: url,
    headers: {
      'PRIVATE-TOKEN': 'glpat-taWN_siuijt5tEAaW_11',
    },
  });

  const getScannerDocTags = React.useCallback(async () => {
    return await baseRequest.get('98/repository/tags');
  }, [baseRequest]);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);
  React.useEffect(() => {
    getScannerDocTags().then((result: any) => {
      const values = result.data.map((items: any) => items.name);
      setTags(values);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const downloadUrl = (version: string) =>
    `https://chat.nbkfinance.ru/apps/scanner-docs/Scanner Docs Setup ${version}.exe`;
  return (
    <>
      <Button onClick={handleClick} size="small" variant="outlined">
        Скачать ScannerDocs
      </Button>
      {open && (
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
          id="version-menu"
        >
          <MenuList>
            {tags.map((item) => (
              <MenuItem
                component={Link}
                to={downloadUrl(item.replace('v', ''))}
                target="_blank"
              >
                Скачать версию {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
}
