import { ValidationError } from 'class-validator';

export default function helperCheck(errors: ValidationError[]): string {
  const result: string[] = [];
  if (errors.length > 0)
    for (const key of Object.keys(errors[0].constraints!))
      result.push(errors[0].constraints![key]);
  return result.join('\n');
}
