import axios from 'axios';
import server from '../utils/server';
import { Dict } from '@contact/models';
import processError from '../utils/processError';
export default async function getDict(value: number) {
  try {
    const response = await axios.post<Dict[]>(server() + '/dict', {
      id: value,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
