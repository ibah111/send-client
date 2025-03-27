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
import getData from '../../../../../../utils/getData';

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
  const AddAlert = React.useCallback(
    (value: string, variant: VariantType = 'success') => {
      enqueueSnackbar(value, { variant, autoHideDuration: 3000 });
    },
    [enqueueSnackbar],
  );
  const dsc = getData('dsc');
  const Click = React.useCallback(() => {
    if (check(Error, AddAlert)) {
      setLoading(true);
      if (dsc.value) {
        const value = dsc.value;
        if (value.length > 2000) {
          const arr = value.split('\n');
          let numbers = [];
          let sum_length: number = 0;
          const over_length = dsc.value.length;
          const total_minus_length = over_length + 100 - 2000;
          for (let i = 0; sum_length <= total_minus_length; i++) {
            const item = arr[i];
            sum_length += item.length;
            numbers.push(i);
          }
          const slicing_value = value.slice(sum_length);
          dsc.setValue(slicing_value);
        }
      }
      updateExec().subscribe({
        next: (res) => {
          if (res) {
            if (res === true) {
              enqueueSnackbar('Документ успешно отправлен в Сбербанк', {
                variant: 'success',
              });
            } else if (res.file) {
              const file = new Blob([toArrayBuffer(res.file.data)], {
                type: 'application/pdf',
              });
              saveAs(file, res.name);
              enqueueSnackbar('Документ успешно сформирован и сохранен', {
                variant: 'success',
              });
            }
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
        },
        error: (error) => {
          setLoading(false);
          enqueueSnackbar(
            error.message || 'Произошла ошибка при отправке документа',
            {
              variant: 'error',
            },
          );
        },
      });
    }
  }, [AddAlert, Error, dispatch, dsc, enqueueSnackbar]);
  return (
    <>
      <Grid item>
        <LoadingButton
          variant="outlined"
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
