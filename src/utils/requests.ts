import axios from 'axios';
import server from './server';
import { of } from 'rxjs';

export const requestsInstance = axios.create({
  baseURL: server(),
});

export default of(requestsInstance);
