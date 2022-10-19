import { DebtCalc } from '@contact/models';
import processError from '../utils/processError';
import requests from '../utils/requests';

export default async function getDebtCalc(id: number) {
  try {
    const response = await requests.post<DebtCalc[]>('/debt_calc', {
      id,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
