import {
  ClassConstructor,
  ClassTransformOptions,
  plainToInstance,
} from 'class-transformer';
import { validate } from 'class-validator';
import { from, map, mergeMap, Observable, pipe } from 'rxjs';

export function validateData<T extends object>(
  example: ClassConstructor<T>,
  options?: ClassTransformOptions,
) {
  return pipe<Observable<unknown>, Observable<T>>(
    mergeMap((res) => {
      const result = plainToInstance(example, res, options);
      return from(validate(result)).pipe(
        map((errors) => {
          if (errors.length > 0) throw errors;
          return result;
        }),
      );
    }),
  );
}
