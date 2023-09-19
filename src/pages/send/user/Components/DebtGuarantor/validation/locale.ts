import {
  IsNotEmpty as IsNotEmptyOrigin,
  IsEmail as IsEmailOrigin,
  IsNumberOptions,
  IsNumber as IsNumberOrigin,
  Length as LengthOrigin,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import ValidatorJS from 'validator';
import { IsInn as IsInnOrigin } from './isInn';
import { IsValidDateTime as IsValidDateTimeOrigin } from './isValidDateTime';
export const IsNotEmpty = (validationOptions?: ValidationOptions) =>
  IsNotEmptyOrigin({ message: 'isNotEmpty', ...validationOptions });
export const IsInn = (validationOptions?: ValidationOptions) =>
  IsInnOrigin({
    message: (args: ValidationArguments) => {
      if (args.constraints[0]?.notValid) return `isInnNotValid`;
      return `isInn`;
    },
    ...validationOptions,
  });
export const IsEmail = (
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions,
) => IsEmailOrigin(options, { message: 'isEmail', ...validationOptions });
export const IsNumber = (
  options: IsNumberOptions = {},
  validationOptions?: ValidationOptions,
) => IsNumberOrigin(options, { message: 'isNumber', ...validationOptions });
export const Length = (
  min: number,
  max?: number,
  validationOptions?: ValidationOptions,
) =>
  LengthOrigin(min, max, {
    message: (args) => {
      const result = `{"name":"$name","options":{"constraint1":$constraint1,"constraint2":$constraint2}}`;
      const isMinLength =
        args?.constraints[0] !== null && args?.constraints[0] !== undefined;
      const isMaxLength =
        args?.constraints[1] !== null && args?.constraints[1] !== undefined;
      if (
        isMinLength &&
        (!args.value || args.value.length < args?.constraints[0])
      ) {
        return result.replace('$name', 'length>=');
      } else if (isMaxLength && args.value.length > args?.constraints[1]) {
        return result.replace('$name', 'length<=');
      }
      return result.replace('$name', 'length<>');
    },
    ...validationOptions,
  });
export const IsValidDateTime = (validationOptions?: ValidationOptions) =>
  IsValidDateTimeOrigin({ message: 'isValidDateTime', ...validationOptions });
