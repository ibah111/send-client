import React from 'react';
import NotLoged from './NotLoged';
import PropTypes from 'prop-types';
import server from '../utils/server';
import axios, { AxiosError } from 'axios';
import { setToken } from '../Reducer/User';
import { getToken } from '../utils/getToken';
import { useDispatch } from 'react-redux';
const connect = async (
  token: string,
  callback: (value: boolean) => void,
  setToken: (value: any) => void,
  setError: (value: string | null) => void,
) => {
  try {
    const response = await axios({
      method: 'POST',
      url: server() + '/login',
      data: { token },
    });
    if (response.data === 'Ok') {
      callback(true);
      setToken(token);
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      const data: any = e.response?.data;
      if (['not_contact', 'error_token'].includes(data?.code)) {
        setError(data?.message);
      } else {
        setError(null);
      }
    }
  }
};
export default function Connect({ children }: any) {
  const dispatch = useDispatch();
  const [loged, setLoged] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  React.useEffect(() => {
    const token = getToken();
    connect(
      token.token,
      setLoged,
      (token) => dispatch(setToken(token)),
      (message) => setMessage(message),
    );
  }, []);
  return (
    <>{loged ? children : <NotLoged message={message ? message : ''} />}</>
  );
}
Connect.propTypes = {
  children: PropTypes.node,
};
