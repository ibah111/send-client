import axios from 'axios';
import { ValidationError } from 'class-validator';
import { t } from 'i18next';
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
export default function processError(e: unknown, name?: string) {
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
      if (e.response?.status === 401)
        getToken().then(
          (token) => (requests.defaults.headers['token'] = token),
        );
      if (e.response.data) {
        store.dispatch(callError(e.response.data.message));
      } else {
        store.dispatch(callError('Произошла непредвиденная ошибка сервера'));
      }
    } else {
      store.dispatch(callError('Произошла ошибка при запросе'));
    }
  }
}
