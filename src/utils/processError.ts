import axios from 'axios';
import { ValidationError } from 'class-validator';
import { t } from 'i18next';
import { of, map, mergeMap } from 'rxjs';
import getToken from '../api/getToken';
import store from '../Reducer';
import { callError } from '../Reducer/Message';
import requests from './requests';
import { createError } from '@tools/rxjs-pipes/axios';
function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}
function isValidationErrors(e: unknown): e is ValidationError[] {
  if (e instanceof Array)
    if (e.length > 0) if (e[0] instanceof ValidationError) return true;
  return false;
}
interface ErrorResult {
  e: unknown;
  addon?: string;
}
export function processError(e: unknown, name?: string) {
  return of(e).pipe(
    map<unknown, ErrorResult>((e) => {
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
            return { e, addon: 'retry' };
          }
          if (e.response.data) {
            store.dispatch(callError(e.response.data.message));
          } else {
            store.dispatch(
              callError('Произошла непредвиденная ошибка сервера'),
            );
          }
        } else {
          store.dispatch(callError('Произошла ошибка при запросе'));
        }
      }
      return { e };
    }),
    mergeMap((result) => {
      if (result.addon === 'retry')
        return getToken().pipe(
          map((token) => {
            if (token) {
              requests.defaults.headers['token'] = token;
              return result.addon;
            }
            return result.e;
          }),
        );
      return of(result.e);
    }),
  );
}
export const transformError = createError(processError);
