import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import requests from '../utils/requests';
import { validateData } from '../utils/rxjs-pipes/validateData';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
import { of } from 'rxjs';

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
    validateData(DebtGuarantorInstance),
    post<DebtGuarantor | { update: true }>(requests, '/debt_calc'),
    transformAxios(),
    transformError('debt_guarantor'),
    authRetry(),
  );
}
