import { Address } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Observable } from 'rxjs';
import { AddressInstance } from '../pages/send/user/Components/DebtGuarantor/Address/AddressInstance';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export async function call(body: CreationAttributes<Address>) {
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
  return res;
}
export default function updateDebtGuarantorAddress(
  body: CreationAttributes<Address>,
) {
  return new Observable<Address | { update: true }>((subscriber) => {
    call(body)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber, 'address'));
  }).pipe(createRetry());
}
