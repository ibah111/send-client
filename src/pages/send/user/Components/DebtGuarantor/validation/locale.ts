import {
  IsNotEmpty as IsNotEmptyOrigin,
  IsEmail as IsEmailOrigin,
  IsNumberOptions,
  IsNumber as IsNumberOrigin,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import ValidatorJS from 'validator';
import { IsInn as IsInnOrigin } from './isInn';
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
