import { TransformFnParams } from 'class-transformer';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import moment from 'moment';
export const NullOrMoment = ({ value }: TransformFnParams) => {
  return value === null ? null : moment(value);
};
@ValidatorConstraint({ name: 'isValidMoment' })
export class IsValidMomentConstructor implements ValidatorConstraintInterface {
  validate(value: moment.Moment): boolean {
    return value?.isValid?.();
  }
  defaultMessage(): string {
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
