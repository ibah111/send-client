import axios from 'axios';
import server from '../utils/server';
import { map, mergeMap, of } from 'rxjs';
import { post, transformAxios, get } from '@tools/rxjs-pipes/axios';
const requests = axios.create({
  baseURL: server('oauth'),
  withCredentials: true,
});
export function checkToken(token: string) {
  return of({ token }).pipe(
    post<boolean>(requests, 'oauth/check'),
    transformAxios(),
  );
}
export function authorize() {
  return of('oauth/authorize').pipe(
    get<string | false>(requests),
    transformAxios(),
  );
}
export function redirect() {
  document.location.replace(
    server('oauth') + `/oauth/authorize?origin=${window.location.href}`,
  );
}
export function getLogin() {
  return authorize().pipe(
    map((result) => {
      if (result) return result;
      redirect();
      throw Error('Переадресация не прошла');
    }),
  );
}
export default function getToken() {
  return getLogin().pipe(
    mergeMap((token) => {
      return checkToken(token).pipe(
        map((result) => {
          if (!result) redirect();
          return token;
        }),
      );
    }),
  );
}
export function logout() {
  return of('oauth/logout').pipe(get(requests));
}
