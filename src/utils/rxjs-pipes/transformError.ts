import { catchError, from, map, Observable } from 'rxjs';
import { processError } from '../processError';

export function transformError<T>() {
  return catchError<T, Observable<T>>((e) => {
    return from(processError(e)).pipe(
      map((e) => {
        throw e;
      }),
    );
  });
}
