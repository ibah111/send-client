import { ValidationError } from 'class-validator';

export default function errorCheck(errors: ValidationError[]): boolean {
  if (errors.length > 0) return true;
  return false;
}
