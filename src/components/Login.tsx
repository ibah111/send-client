import React from 'react';
import NotLoged from './NotLoged';
import PropTypes from 'prop-types';
import server from '../utils/server';
import axios from 'axios';
import { getToken } from '../utils/getToken';
const connect = async (
  token: string,
  callback: (value: boolean) => void,
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
    }
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const data = e.response?.data;
      if (['not_contact', 'error_token'].includes(data?.code)) {
        setError(data?.message);
      } else {
        setError(null);
      }
    }
  }
};
interface LoginProps {
  children: React.ReactNode;
}
export default function Login({ children }: LoginProps) {
  const [loged, setLoged] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  React.useEffect(() => {
    const token = getToken();
    connect(token.token, setLoged, (message) => setMessage(message));
  }, []);
  return (
    <>{loged ? children : <NotLoged message={message ? message : ''} />}</>
  );
}
Login.propTypes = {
  children: PropTypes.node,
};
