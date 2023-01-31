import { validateSync } from 'class-validator';

export default function requiredCheck<T extends object>(data: T): boolean {
  const errors = validateSync(data, {
    skipMissingProperties: true,
  });
  if (errors.length > 0) if (errors[0].constraints?.isNotEmpty) return true;
  return false;
}
