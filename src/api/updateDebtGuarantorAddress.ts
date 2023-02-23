import { Address } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { AddressInstance } from '../pages/send/user/Components/DebtGuarantor/Address/AddressInstance';
import processError from '../utils/processError';
import requests from '../utils/requests';
export default async function updateDebtGuarantorAddress(
  body: CreationAttributes<Address>,
) {
  try {
    const data = plainToInstance(AddressInstance, body, {
      excludeExtraneousValues: true,
    });
    await validateOrReject(data);
    if (body === null) {
      throw new Error('Данные пусты');
    }
    const res = await requests.post<Address | { update: true }>(
      '/create_or_update_debt_guarantor/address',
      data,
    );
    return res.data;
  } catch (e) {
    processError(e, 'address');
    throw e;
  }
}
