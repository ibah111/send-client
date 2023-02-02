import { DebtGuarantor } from '@contact/models';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import moment from 'moment';
import { createInstance } from '../pages/send/user/Components/DebtGuarantor/DataInstance';
import processError from '../utils/processError';
import requests from '../utils/requests';
const DataInstance = createInstance(true);
export default async function getDebtGuarantor(
  value: number,
): Promise<DebtGuarantor> {
  try {
    const response = await requests.post<DebtGuarantor>('/get_debt_guarantor', {
      id: value,
    });
    const instance = plainToInstance(DataInstance, response.data);
    const result = instanceToPlain(instance) as DebtGuarantor;
    return result;
  } catch (e) {
    processError(e);
    throw e;
  }
}
