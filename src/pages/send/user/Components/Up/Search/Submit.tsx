import { Grid } from '@mui/material';
import { t } from 'i18next';
import { useSnackbar, VariantType } from 'notistack';
import React from 'react';
import updateExec from '../../../../../../api/updateExec';
import { useAppDispatch, useAppSelector } from '../../../../../../Reducer';
import { saveAs } from 'file-saver';
import { reset, setId } from '../../../../../../Reducer/Send';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ResetComment } from '../../../../../../Reducer/Comment';
import { ErrorTypes } from '../../../../../../Reducer/Error';
function toArrayBuffer(buf: number[]) {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}
const check = (
  Error: ErrorTypes,
  res: any,
  error: (value: string, type: VariantType) => void,
) => {
  let errors = 0;
  for (const value of Object.entries(Error)) {
    if (value[1] !== null) {
      errors += 1;
      error(t(`form.errors_popup.${value[1]}`, { value: value[0] }), 'error');
    }
  }
  if (errors === 0) {
    return true;
  } else {
    return false;
  }
};
export default function Submit() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  const Send = useAppSelector((state) => state.Send);
  const Error = useAppSelector((state) => state.Error);
  const AddAlert = (value: string, variant: VariantType = 'success') => {
    enqueueSnackbar(value, { variant, autoHideDuration: 3000 });
  };
  const Click = () => {
    if (check(Error, Send, AddAlert)) {
      setLoading(true);
      updateExec().then((res) => {
        if (res) {
          const file = new Blob([toArrayBuffer(res.file.data)], {
            type: 'application/pdf',
          });
          saveAs(file, res.name);
          dispatch(setId(0));
          dispatch(reset());
          dispatch(ResetComment());
          setLoading(false);
        }
      });
    }
  };
  return (
    <>
      <Grid item>
        <LoadingButton
          disabled={Boolean(!Send.id)}
          loading={loading}
          onClick={Click}
        >
          {t('form.search.submit')}
        </LoadingButton>
      </Grid>
    </>
  );
}
