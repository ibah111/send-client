import { createTheme as createThemeOrigin, Theme } from '@mui/material';
import { deepmerge } from '@mui/utils';
export function createTheme(old: Theme) {
  return deepmerge(
    createThemeOrigin({
      components: {
        MuiButton: { defaultProps: { size: 'large' } },
        MuiIconButton: { defaultProps: { size: 'small' } },
        MuiAvatar: { defaultProps: { sx: { width: 30, height: 30 } } },
        MuiMenu: {
          defaultProps: {
            PaperProps: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 40,
                  height: 40,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
            transformOrigin: { horizontal: 'right', vertical: 'top' },
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          },
        },
      },
    }),
    old,
  );
}
