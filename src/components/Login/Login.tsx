import React from 'react';
import { NotLoged } from './NotLoged';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthUserSuccess } from '../../Schemas/Auth';
import { useAppDispatch, useAppSelector } from '../../Reducer';
import { setUser } from '../../Reducer/User';
import requests from '../../utils/requests';
const connect = async (
  callback: (value: AuthUserSuccess) => void,
  setError: (value: string | null) => void,
) => {
  try {
    const response = await requests.post<AuthUserSuccess>('/login');
    callback(response.data);
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const data = e.response?.data;
      if (data.Result === 'error') {
        setError(data?.Message);
      } else {
        setError(null);
      }
    }
  }
};
interface LoginProps {
  children: React.ReactNode;
}
export function Login({ children }: LoginProps) {
  const loged = useAppSelector((state) => state.User.login_result);
  const dispatch = useAppDispatch();
  const [message, setMessage] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!loged) {
      connect(
        (value) => {
          dispatch(setUser(value));
        },
        (message) => setMessage(message),
      );
    }
  }, [loged]);
  return (
    <>{loged ? children : <NotLoged message={message ? message : ''} />}</>
  );
}
Login.propTypes = {
  children: PropTypes.node,
};
