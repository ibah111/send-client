import axios, { AxiosResponse } from 'axios';
import { ValidationError } from 'class-validator';
import { t } from 'i18next';
import { Subscriber, retry, Observable } from 'rxjs';
import getToken from '../api/getToken';
import store from '../Reducer';
import { callError } from '../Reducer/Message';
import requests from './requests';
function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}
function isValidationErrors(e: unknown): e is ValidationError[] {
  if (e instanceof Array)
    if (e.length > 0) if (e[0] instanceof ValidationError) return true;
  return false;
}
async function processError(e: unknown, name?: string) {
  if (isValidationErrors(e)) {
    for (const error of e)
      if (error.constraints) {
        const keys = objectKeys(error.constraints);
        store.dispatch(
          callError(
            t(`form.${name}.errors_popup.${error.constraints[keys[0]]}`, {
              property: error.property,
              value: error.value,
            }),
          ),
        );
      }
  }
  if (axios.isAxiosError(e)) {
    if (e.response) {
      if (e.response?.status === 401) {
        const token = await getToken();
        if (token) {
          requests.defaults.headers['token'] = token;
          return 'retry';
        }
      }
      if (e.response.data) {
        store.dispatch(callError(e.response.data.message));
      } else {
        store.dispatch(callError('Произошла непредвиденная ошибка сервера'));
      }
    } else {
      store.dispatch(callError('Произошла ошибка при запросе'));
    }
  }
  return e;
}
export function createError<T>(subscriber: Subscriber<T>, name?: string) {
  return async (e: unknown) => subscriber.error(await processError(e, name));
}
export function createRetry<T>() {
  return retry<T>({
    delay: (err) =>
      new Observable((subscriber) => {
        if (err === 'retry') subscriber.next();
        subscriber.complete();
      }),
  });
}
export function createNextDefault<T>(subscriber: Subscriber<T>) {
  return (res: AxiosResponse<T>) => {
    subscriber.next(res.data);
    subscriber.complete();
  };
}
