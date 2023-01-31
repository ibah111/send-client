import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
const regex = /^(\d{10}|\d{12})$/;

@ValidatorConstraint({ name: 'isInn' })
export class IsInnConstructor implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return regex.test(value);
  }
  defaultMessage(): string {
    return `This text '($value)' is not inn`;
  }
}
export function IsInn(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInn',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsInnConstructor,
    });
  };
}
