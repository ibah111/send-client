import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import moment from 'moment';

@ValidatorConstraint({ name: 'isValidMoment' })
export class IsValidMomentConstructor implements ValidatorConstraintInterface {
  validate(value: moment.Moment, args: ValidationArguments): boolean {
    return value?.isValid();
  }
  defaultMessage(args: ValidationArguments): string {
    return `This data '($value)' not valid Date`;
  }
}
export function IsValidMoment(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidMoment',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsValidMomentConstructor,
    });
  };
}
