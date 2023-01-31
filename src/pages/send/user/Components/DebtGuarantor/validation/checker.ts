import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import errorCheck from './errorCheck';
import helperCheck from './helperCheck';
import requiredCheck from './requiredCheck';
interface CheckerResult {
  required: boolean;
  error: boolean;
  helperText: string;
}
export default function checker<T extends object, F>(
  example: ClassConstructor<T>,
  name: string,
  value: F,
): CheckerResult {
  const result: CheckerResult = {
    required: false,
    error: false,
    helperText: '',
  };
  const dataNull = plainToInstance(example, { [name]: '' });
  const data = plainToInstance(example, { [name]: value });
  result.required = requiredCheck(dataNull);
  const errors = validateSync(data, { skipMissingProperties: true });
  result.error = errorCheck(errors);
  result.helperText = helperCheck(errors);
  return result;
}
