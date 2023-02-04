import { Address } from '@contact/models';
import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function getDebtGuarantorAddress(
  value: number,
): Promise<Address[]> {
  try {
    const response = await requests.post<Address[]>(
      '/get_debt_guarantor/address',
      {
        id: value,
      },
    );
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
