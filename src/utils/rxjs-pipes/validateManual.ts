import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, validate } from 'class-validator';
import { concatAll, from, map, Observable, pipe } from 'rxjs';
export function createValidator(...decorators: PropertyDecorator[]) {
  const example = class {
    data: unknown;
  };
  Reflect.decorate([IsNotEmpty(), ...decorators], example.prototype, 'data');
  return example;
}
export function validateManual<T>(...decorators: PropertyDecorator[]) {
  const example = createValidator(...decorators);
  return pipe<Observable<T>, Observable<Observable<T>>, Observable<T>>(
    map((res) => {
      const result = plainToInstance(example, { data: res });
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
