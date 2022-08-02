import { DocAttach } from '@contact/models';
import axios from 'axios';
import store from '../Reducer';
import server from '../utils/server';
type typer = number | undefined;
type value = typer[];
type result<T extends typer> = T extends number ? Blob : DocAttach[];
export default async function getDocuments<T extends value>(
  ...args: T
): Promise<result<T[0]>> {
  const token = store.getState().User.token;
  const law_exec_id = store.getState().Send.id;
  if (!args[0]) {
    const response = await axios.post<result<T[0]>>(server() + '/documents', {
      token,
      law_exec_id,
    });
    return response.data;
  } else {
    const response = await axios.post<result<T[0]>>(
      server() + '/documents',
      {
        token,
        id: args[0],
      },
      { responseType: 'blob' },
    );
    return response.data as result<T[0]>;
  }
}
