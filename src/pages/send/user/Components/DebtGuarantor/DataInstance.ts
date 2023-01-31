import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class DataInstance {
  @IsNotEmpty()
  @Length(0, 10)
  fio?: string;
}
