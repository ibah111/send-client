import { catchError, from, map, Observable } from 'rxjs';
import { processError } from '../processError';

export function transformError<T>(name?: string) {
  return catchError<T, Observable<T>>((e) => {
    return from(processError(e, name)).pipe(
      map((e) => {
        throw e;
      }),
    );
  });
}
