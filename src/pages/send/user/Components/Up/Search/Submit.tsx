import { Grid } from '@mui/material';
import { t } from 'i18next';
import { useSnackbar, VariantType } from 'notistack';
import React from 'react';
import updateExec from '../../../../../../api/updateExec';
import { useAppDispatch, useAppSelector } from '../../../../../../Reducer';
import { saveAs } from 'file-saver';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ErrorTypes } from '../../../../../../Reducer/Error';
import resetData from '../../../../../../utils/resetData';
import { callError } from '../../../../../../Reducer/Message';
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
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  const Send = useAppSelector((state) => state.Send);
  const Error = useAppSelector((state) => state.Error);
  const dispatch = useAppDispatch();
  const AddAlert = (value: string, variant: VariantType = 'success') => {
    enqueueSnackbar(value, { variant, autoHideDuration: 3000 });
  };
  const Click = () => {
    if (check(Error, AddAlert)) {
      setLoading(true);
      updateExec()
        .then((res) => {
          if (res) {
            const file = new Blob([toArrayBuffer(res.file.data)], {
              type: 'application/pdf',
            });
            saveAs(file, res.name);
            resetData();
            setLoading(false);
          } else {
            setLoading(false);
            if (res === null) {
              dispatch(callError('Дело не имеет изменений'));
            }
            if (res === false) {
              dispatch(callError('Вас нет в Контакте, обратитесь в IT отдел'));
            }
          }
        })
        .catch(() => setLoading(false));
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
