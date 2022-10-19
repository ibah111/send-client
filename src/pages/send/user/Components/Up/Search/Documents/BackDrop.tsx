import { Collapse, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
interface BackDropProps {
  active: boolean;
}
export default function BackDrop({ active }: BackDropProps) {
  return (
    <>
      <Collapse sx={{ height: '30%', width: '100%' }} in={active}>
        <Paper
          sx={{
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            background: '#fafafa',
            display: 'flex',
            border: 'dashed grey 2px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 80, color: '#BFBFBF' }} />
        </Paper>
      </Collapse>
    </>
  );
}
