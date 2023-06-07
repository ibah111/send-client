import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { concatAll, from, map, Observable, pipe } from 'rxjs';

export function validateData<T extends object>(example: ClassConstructor<T>) {
  return pipe<Observable<T>, Observable<Observable<T>>, Observable<T>>(
    map((res) => {
      const result = plainToInstance(example, res);
      return from(validate(result)).pipe(
        map((errors) => {
          if (errors.length > 0) throw errors;
          return res;
        }),
      );
    }),
    concatAll(),
  );
}
