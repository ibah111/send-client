import {
  ClassConstructor,
  ClassTransformOptions,
  plainToInstance,
} from 'class-transformer';
import { map } from 'rxjs';
export function transformInstance<V, T>(
  example: ClassConstructor<T>,
  options?: ClassTransformOptions,
) {
  return map<V, V extends Array<T> ? T[] : T>(
    (res) =>
      plainToInstance(example, res, options) as V extends Array<T> ? T[] : T,
  );
}
