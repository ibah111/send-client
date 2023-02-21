import axios from 'axios';
import server from './server';

const requests = axios.create({
  baseURL: server(),
});
export default requests;
