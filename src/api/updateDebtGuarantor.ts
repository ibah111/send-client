import { DebtGuarantor } from '@contact/models';
import { CreationAttributes } from '@sql-tools/sequelize';
import requests from '../utils/requests';
import { forkJoin, of } from 'rxjs';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
import { DebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import { validateData } from '@tools/rxjs-pipes/validator';
const url = of('/create_or_update_debt_guarantor');
export default function updateDebtGuarantor(
  body: CreationAttributes<DebtGuarantor>,
) {
  return forkJoin([
    requests,
    url,
    of(body).pipe(
      validateData(DebtGuarantorInstance, { resultTransform: true }),
    ),
  ]).pipe(
    post<DebtGuarantor | { update: true }>(),
    transformAxios(),
    transformError('debt_guarantor'),
    authRetry(),
  );
}
