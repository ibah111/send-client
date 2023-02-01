import { ValidationError } from 'class-validator';
import { t } from 'i18next';

export default function helperCheck(errors: ValidationError[]): string {
  if (errors.length > 0) {
    for (const key of Object.keys(errors[0].constraints!))
      return t(`form.errors.${errors[0].constraints![key]}`);
  }
  return '';
}
