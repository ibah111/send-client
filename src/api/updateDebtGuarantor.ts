import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { createInstance } from '../pages/send/user/Components/DebtGuarantor/DataInstance';
import processError from '../utils/processError';
import requests from '../utils/requests';

const DataInstance = createInstance();
export default async function updateDebtGuarantor(
  body: CreationAttributes<DebtGuarantor>,
) {
  try {
    const data = plainToInstance(DataInstance, body);
    await validateOrReject(data);
    if (body === null) {
      throw new Error('Данные пусты');
    }
    const res = await requests.post<DebtGuarantor | { update: true }>(
      '/create_or_update_debt_guarantor',
      data,
    );
    return res.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
