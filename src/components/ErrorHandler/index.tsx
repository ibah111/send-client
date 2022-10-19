import { useSnackbar } from 'notistack';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Reducer';
import { resetMessage } from '../../Reducer/Message';

export default function ErrorHandler() {
  const messages = useAppSelector((state) => state.Message);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    if (messages.length > 0) {
      for (const message of messages)
        enqueueSnackbar(message.text, message.params);
      dispatch(resetMessage());
    }
  }, [messages]);
  return <></>;
}
