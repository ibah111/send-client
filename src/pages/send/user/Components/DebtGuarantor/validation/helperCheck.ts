import { ValidationError } from 'class-validator';
import { t } from 'i18next';
import { TranslateMessage } from './checker';

export default function helperCheck(errors: ValidationError[]): string {
  if (errors.length > 0) {
    console.log(errors);
    const error = errors[errors.length - 1];
    for (const key of Object.keys(error.constraints!)) {
      if (error.constraints![key].startsWith('{')) {
        const data: TranslateMessage = JSON.parse(error.constraints![key]);
        return t(`form.errors.${data.name}`, {
          value: error.value,
          property: error.property,
          ...data.options,
        });
      }
      return t(`form.errors.${error.constraints![key]}`, {
        value: error.value,
        property: error.property,
      });
    }
  }
  return '';
}
