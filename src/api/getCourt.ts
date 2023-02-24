import { LawCourt } from '@contact/models';
import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export default function getCourt(
  data: { name: string } | { id: number | string | null },
) {
  return new Observable<LawCourt[]>((subscriber) => {
    requests
      .post<LawCourt[]>('/court', data)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
