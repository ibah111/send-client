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
import createExec from "../../../../../api/createExec";
import deleteExec from "../../../../../api/deleteExec";
import getComment from "../../../../../api/getComment";
import { useAppDispatch } from "../../../../../Reducer";
import { setLawActComment, setLawExecComment } from "../../../../../Reducer/Comment";
import { setId } from "../../../../../Reducer/Send";

export default function YesOrNo({
  open,
  onClose,
  row,
}: {
  open: boolean;
  onClose: () => void;
  row: any;
}) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const Create = () => {
    createExec(row["LawAct.id"], {
      court_doc_num: row.court_doc_num,
      executive_typ: row.executive_typ,
      court_date: row.court_date,
      entry_force_dt: row.entry_force_dt,
    }).then((res) => {
      if (res) {
        dispatch(setId(res));
        getComment({ type: "law_exec", id: row.id }).then((res) => {
          dispatch(setLawActComment(res.LawAct.dsc));
          dispatch(setLawExecComment(res.dsc));
        });
        onClose();
      }
    });
  };
  const CreateWithDelete = () => {
    createExec(row["LawAct.id"], {
      court_doc_num: row.court_doc_num,
      executive_typ: row.executive_typ,
      court_date: row.court_date,
      entry_force_dt: row.entry_force_dt,
    }).then((res) => {
      if (res) {
        getComment({ type: "law_exec", id: row.id }).then((res) => {
          dispatch(setLawActComment(res.LawAct.dsc));
          dispatch(setLawExecComment(res.dsc));
        });
        deleteExec(row.id);
        dispatch(setId(res));
        onClose();
      }
    });
  };
  const Update = () => {
    getComment({ type: "law_exec", id: row.id }).then((res) => {
      dispatch(setLawActComment(res.LawAct.dsc));
      dispatch(setLawExecComment(res.dsc));
      onClose();
    });
    dispatch(setId(row.id));
    onClose();
  };
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{t("form.yes_or_no.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("form.yes_or_no.description", { value: row.fssp_doc_num })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Create}>{t("form.yes_or_no.create")}</Button>
          <Button onClick={CreateWithDelete} autoFocus>
            {t("form.yes_or_no.create_with_delete")}
          </Button>
          <Button onClick={onClose}>{t("form.yes_or_no.cancel")}</Button>
          <Button onClick={Update}>{t("form.yes_or_no.update")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
