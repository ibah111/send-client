import { DebtCalc } from '@contact/models';
import axios from 'axios';
import processError from '../utils/processError';
import server from '../utils/server';

export default async function getDebtCalc(id: number) {
  try {
    const response = await axios.post<DebtCalc[]>(server() + '/debt_calc', {
      id,
    });
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
