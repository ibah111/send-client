import React from 'react';
import { NotLoged } from './NotLoged';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppSelector } from '../../Reducer';
import { setUser } from '../../Reducer/User';
import connect from './connect';
interface LoginProps {
  children: React.ReactNode;
}
export function Login({ children }: LoginProps) {
  const loged = useAppSelector((state) => state.User.login_result);
  const dispatch = useAppDispatch();
  const [message, setMessage] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!loged) {
      const data = connect().subscribe({
        next: (value) => {
          dispatch(setUser(value));
        },
        error: (message) => setMessage(message),
      });
      return () => data.unsubscribe();
    }
  }, [dispatch, loged]);
  return (
    <>{loged ? children : <NotLoged message={message ? message : ''} />}</>
  );
}
Login.propTypes = {
  children: PropTypes.node,
};
