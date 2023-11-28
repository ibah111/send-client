import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import requests from '../utils/requests';
import { of } from 'rxjs';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
import { DebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import { validateData } from '@tools/rxjs-pipes/validator';

export default function updateDebtGuarantor(
  body: CreationAttributes<DebtGuarantor>,
) {
  return of(body).pipe(
    validateData(DebtGuarantorInstance, { resultTransform: true }),
    post<DebtGuarantor | { update: true }>(
      requests,
      '/create_or_update_debt_guarantor',
    ),
    transformAxios(),
    transformError('debt_guarantor'),
    authRetry(),
  );
}
