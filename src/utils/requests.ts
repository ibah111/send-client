import axios from 'axios';
import { getToken } from './getToken';
import server from './server';

const requests = axios.create({
  baseURL: server(),
  headers: { ...getToken() },
});
export default requests;
