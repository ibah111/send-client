import { Address } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { of } from 'rxjs';
import { AddressInstance } from '../pages/send/user/Components/DebtGuarantor/Address/AddressInstance';

import requests from '../utils/requests';
import {
  validateData,
  post,
  transformAxios,
  authRetry,
} from '@tools/rxjs-pipes';
import { transformError } from '../utils/processError';
export default function updateDebtGuarantorAddress(
  body: CreationAttributes<Address>,
) {
  return of(body).pipe(
    validateData(AddressInstance, {
      transform: { excludeExtraneousValues: true },
      resultTransform: true,
    }),
    post<Address | { update: true }>(
      requests,
      `/create_or_update_debt_guarantor/address`,
    ),
    transformAxios(),
    transformError('address'),
    authRetry(),
  );
}
