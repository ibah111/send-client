import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComment from "./ButtonComment";
import YesOrNo from "./YesOrNo";

export default function Canceled({
  open,
  onClose,
  row,
  next,
}: {
  open: boolean;
  onClose: () => void;
  row: any;
  next: () => void;
}) {
  const { t } = useTranslation();
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{t("form.canceled.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("form.canceled.description")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={next}>{t("form.canceled.skip")}</Button>
          <Button onClick={onClose}>{t("form.canceled.cancel")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
