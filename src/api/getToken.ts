import axios from 'axios';
import server from '../utils/server';
const requests = axios.create({
  baseURL: server('oauth'),
  withCredentials: true,
});
export async function checkToken(token: string) {
  const res = await requests.post<boolean>('oauth/check', {
    token,
  });
  return res.data;
}
export async function authorize() {
  const res = await requests.get<string | false>('oauth/authorize');
  return res.data;
}
export function redirect() {
  location.replace(
    server('oauth') + `/oauth/authorize?origin=${window.location.href}`,
  );
}
export async function getLogin() {
  const result = await authorize();
  if (result) return result;
  redirect();
  throw Error('Переадресация не прошла');
}
export default async function getToken() {
  const token = await getLogin();
  if (!(await checkToken(token))) redirect();
  return token;
}
