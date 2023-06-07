import { AppBar, Dialog, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogFileProps {
  open: boolean;
  file: null | Blob;
  onClose: () => void;
}
export default function DialogFile({ open, onClose, file }: DialogFileProps) {
  return (
    <>
      <Dialog fullScreen open={open} onClose={onClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <iframe
          width="100%"
          height="100%"
          title="Документ"
          src={file ? URL.createObjectURL(file) : ''}
        />
      </Dialog>
    </>
  );
}
