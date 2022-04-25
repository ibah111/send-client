import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import addComment from "../../../../../api/addComment";

export default function ButtonComment({
  id,
  onClick,
}: {
  id: number;
  onClick: () => void;
}) {
  const { t } = useTranslation();
  const [comment, setComment] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    onClick();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    addComment(id, comment).then((res) => {
      handleClose();
    });
  };
  return (
    <>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        {t("form.yes_or_no.comment")}
      </Button>
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>{t("form.set_comment.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("form.set_comment.instruction")}
          </DialogContentText>
          <TextField
            label={t("form.set_comment.text")}
            value={comment}
            fullWidth
            multiline
            margin="dense"
            onChange={(event) => setComment(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("form.set_comment.cancel")}</Button>
          <Button onClick={handleSubmit}>{t("form.set_comment.submit")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
