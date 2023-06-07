import { Address } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import { of } from 'rxjs';
import { AddressInstance } from '../pages/send/user/Components/DebtGuarantor/Address/AddressInstance';

import requests from '../utils/requests';
import { validateData } from '../utils/rxjs-pipes/validateData';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
export default function updateDebtGuarantorAddress(
  body: CreationAttributes<Address>,
) {
  return of(body).pipe(
    validateData(AddressInstance, { excludeExtraneousValues: true }),
    post<Address | { update: true }>(
      requests,
      `/create_or_update_debt_guarantor/address`,
    ),
    transformAxios(),
    transformError('address'),
    authRetry(),
  );
}
