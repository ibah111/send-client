import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Table from "./Table";

export default function CreateLawExec({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <>
      <Dialog fullWidth maxWidth={false} open={open} onClose={handleClose}>
        <DialogTitle>Создание ИП</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <DialogContentText>
              Здесь вам надо выбрать дело на основе которого будет ИП
            </DialogContentText>
            <Table handleClose={handleClose} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
