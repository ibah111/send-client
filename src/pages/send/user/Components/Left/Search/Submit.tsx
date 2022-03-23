import { Button, Grid } from "@mui/material";
import { t } from "i18next";
import { useSnackbar, VariantType } from "notistack";
import React from "react";
import updateExec from "../../../../../../api/updateExec";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { saveAs } from "file-saver";
import { reset, setId } from "../../../../../../Reducer/Send";
function toArrayBuffer(buf: number[]) {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}
const data = [
  "total_sum",
  "load_dt",
  "court_doc_num",
  "executive_typ",
  "court_date",
  "DELIVERY_TYP",
  "entry_force_dt",
  "fssp_date",
  "r_court_id",
];
const check = (res: any, error: (value: String, type: VariantType) => void) => {
  let errors = 0;
  for (const value of data) {
    if (res[value] === null) {
      errors += 1;
      error(t("form.errors.not_text", { value }), "error");
    }
  }
  if (errors === 0) {
    return true;
  } else {
    return false;
  }
};
export default function Submit() {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Send = useAppSelector((state) => state.Send);
  const AddAlert = (value: String, variant: VariantType = "success") => {
    enqueueSnackbar(value, { variant, autoHideDuration: 3000 });
  };
  const Click = () => {
    if (check(Send, AddAlert)) {
      updateExec().then((res) => {
        if (res) {
          const file = new Blob([toArrayBuffer(res.file.data)], {
            type: "application/pdf",
          });
          saveAs(file, res.name);
          dispatch(setId(0));
          dispatch(reset());
        }
      });
    }
  };
  return (
    <>
      <Grid item>
        <Button onClick={Click}>{t("form.search.submit")}</Button>
      </Grid>
    </>
  );
}
