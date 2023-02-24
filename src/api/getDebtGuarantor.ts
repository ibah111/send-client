import { DebtGuarantor } from '@contact/models';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { createDebtGuarantorInstance } from '../pages/send/user/Components/DebtGuarantor/DebtGuarantorInstance';
import { createError, createRetry } from '../utils/processError';
import requests from '../utils/requests';
const DebtGuarantorInstance = createDebtGuarantorInstance(true);
export default function getDebtGuarantor(value: number) {
  return new Observable<DebtGuarantor>((subscriber) => {
    requests
      .post<DebtGuarantor>('/get_debt_guarantor', {
        id: value,
      })
      .then((res) => {
        const instance = plainToInstance(DebtGuarantorInstance, res.data);
        const { ...result } = instance;
        subscriber.next(result as DebtGuarantor);
        subscriber.complete();
      })
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
