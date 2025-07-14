import { enqueueSnackbar } from 'notistack';

export function errorThrow(error: Error | unknown) {
  const err_message =
    error instanceof Error ? error.message : 'Неизвестная ошибка';
  enqueueSnackbar(err_message, { variant: 'error' });
  throw new Error(err_message);
}