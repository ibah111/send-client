import { DebtCalc } from '@contact/models';
import axios from 'axios';
import server from '../utils/server';

export default async function getDebtCalc(id: number) {
  const response = await axios.post<DebtCalc[]>(server() + '/debt_calc', {
    id,
  });
  return response.data;
}
