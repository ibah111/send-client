import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import requests from '../utils/requests';
import { of } from 'rxjs';
import {
  validateData,
  post,
  transformAxios,
  authRetry,
} from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';

const DebtGuarantorInstance = createDebtGuarantorInstance();
export async function call(body: CreationAttributes<DebtGuarantor>) {
  const data = plainToInstance(DebtGuarantorInstance, body);
  await validateOrReject(data);
  if (body === null) {
    throw new Error('Данные пусты');
  }
  const res = await requests.post<DebtGuarantor | { update: true }>(
    '/create_or_update_debt_guarantor',
    data,
  );
  return res;
}
export default function updateDebtGuarantor(
  body: CreationAttributes<DebtGuarantor>,
) {
  return of(body).pipe(
    validateData(DebtGuarantorInstance, { resultTransform: true }),
    post<DebtGuarantor | { update: true }>(requests, '/debt_calc'),
    transformAxios(),
    transformError('debt_guarantor'),
    authRetry(),
  );
}
