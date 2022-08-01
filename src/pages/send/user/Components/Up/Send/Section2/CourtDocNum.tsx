import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMaskInput } from 'react-imask';
import { TypesData } from '../../../../../../../Reducer/Send';
import getData from '../../../../../../../utils/getData';
const types = (value: TypesData) => {
  switch (value) {
    case 4:
      return {
        mask: '0-0000/{1\\0}23-000',
        definitions: {
          '1': '2',
          '2': /[1-2]/,
          '3': /[1-9]/,
        },
      };
    default:
      return { mask: /^$/ };
  }
};
const TextMaskCustom = React.forwardRef(function TextMaskCustom(
  props: any,
  ref,
) {
  const data = getData('court_doc_num', 'string');
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      {...types(data.value)}
      inputRef={ref}
      onAccept={(value) => onChange(value)}
      overwrite
    />
  );
});
export default function CourtDocNum() {
  const { t } = useTranslation();
  const data = getData('court_doc_num', 'string');
  return (
    <>
      <Grid sx={{ width: 220 }} item>
        <TextField
          error={data.isInvalid}
          fullWidth
          value={data.value}
          onChange={(event) => data.setValue(event.target.value)}
          label={t('form.send.court_doc_num')}
        />
      </Grid>
    </>
  );
}
