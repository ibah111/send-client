import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import PropTypes from "prop-types";
import React from "react";
import { IMaskInput } from "react-imask";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setCourtDocNum } from "../../../../../../Reducer/Send";
const types = (value: Number) => {
  switch (value) {
    case 1:
      return {
        mask: "0-0000/{1\\0}23",
        definitions: {
          "1": "2",
          "2": /[1-2]/,
          "3": /[1-9]/,
        },
      };
    default:
      return { mask: /^$/ };
  }
};
const TextMaskCustom = React.forwardRef(function TextMaskCustom(
  props: any,
  ref
) {
  const executive_typ = useAppSelector((state) => state.Send.executive_typ);
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      {...types(executive_typ)}
      inputRef={ref}
      onAccept={(value) => onChange(value)}
      overwrite
    />
  );
});
export default function CourtDocNum() {
  const court_doc_num = useAppSelector((state) => state.Send.court_doc_num);
  const dispatch = useAppDispatch();
  return (
    <>
      <Grid sx={{ width: 600 }} item>
        <TextField
          error={!court_doc_num}
          fullWidth
          value={court_doc_num}
          onChange={(event) => dispatch(setCourtDocNum(event))}
          label={t("form.send.court_doc_num")}
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
        />
      </Grid>
    </>
  );
}
