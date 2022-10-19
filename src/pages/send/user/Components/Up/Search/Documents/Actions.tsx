import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import removeDocument from '../../../../../../../api/removeDocument';
interface ActionsProps {
  id: number;
  refresh: () => void;
}
export default function Actions({ id, refresh }: ActionsProps) {
  return (
    <IconButton onClick={() => removeDocument(id).then(refresh)}>
      <DeleteIcon />
    </IconButton>
  );
}
