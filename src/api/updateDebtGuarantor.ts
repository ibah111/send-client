import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Observable } from 'rxjs';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';

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
  return new Observable<DebtGuarantor | { update: true }>((subscriber) => {
    call(body)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber, 'debt_guarantor'));
  }).pipe(createRetry());
}
