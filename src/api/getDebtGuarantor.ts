import { DebtGuarantor } from '@contact/models';
import { plainToInstance } from 'class-transformer';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import processError from '../utils/processError';
import requests from '../utils/requests';
const DebtGuarantorInstance = createDebtGuarantorInstance(true);
export default async function getDebtGuarantor(
  value: number,
): Promise<DebtGuarantor> {
  try {
    const response = await requests.post<DebtGuarantor>('/get_debt_guarantor', {
      id: value,
    });
    const instance = plainToInstance(DebtGuarantorInstance, response.data);
    const { ...result } = instance;
    return result as DebtGuarantor;
  } catch (e) {
    processError(e);
    throw e;
  }
}
