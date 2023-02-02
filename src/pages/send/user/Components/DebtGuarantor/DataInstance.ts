import { Transform, Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import moment from 'moment';
import {
  IsNotEmpty,
  IsInn,
  IsEmail,
  IsNumber,
  IsValidMoment,
} from './validation/locale';

export class DataInstance {
  @IsNotEmpty()
  fio: string;
  @IsNumber()
  @IsNotEmpty()
  parent_id: number;
  @IsValidMoment()
  @IsNotEmpty()
  @Type(() => moment)
  birth_date: moment.Moment;
  @IsOptional()
  @IsString()
  passport: string;
  @IsString()
  @IsNotEmpty()
  sex: string;
  @IsOptional()
  @IsNumber()
  id?: number;
  @IsOptional()
  @IsNumber()
  sum?: number | null;
  @IsOptional()
  @IsString()
  dsc?: string | null;
  @IsOptional()
  @IsString()
  address?: string | null;
  @IsNumber()
  @IsNotEmpty()
  typ: number;
  @IsOptional()
  @IsString()
  ext_id?: string | null;
  @IsOptional()
  @IsNumber()
  family_status?: number | null;
  @IsOptional()
  @IsNumber()
  education?: number | null;
  @IsOptional()
  @IsString()
  company_name?: string | null;
  @IsOptional()
  @IsString()
  position?: string | null;
  @IsOptional()
  @IsInn()
  inn?: string | null;
  @IsOptional()
  @IsString()
  kpp?: string | null;
  @IsOptional()
  @IsString()
  pay_info?: string | null;
  @IsOptional()
  @IsString()
  director_fio?: string | null;
  @IsOptional()
  @IsString()
  contract?: string | null;
  @IsNotEmpty()
  @IsValidMoment()
  @Type(() => moment)
  start_date?: moment.Moment | null;
  @IsNotEmpty()
  @IsValidMoment()
  @Type(() => moment)
  end_date?: moment.Moment | null;
  @IsNotEmpty()
  @IsValidMoment()
  @Type(() => moment)
  finish_date?: moment.Moment | null;
  @IsOptional()
  @IsNumber()
  currency?: number | null;
  @IsOptional()
  @IsNumber()
  real_sum?: number | null;
  @IsOptional()
  @IsNumber()
  fair_sum?: number | null;
  @IsOptional()
  @IsNumber()
  quality_coeff?: number | null;
  @IsOptional()
  @IsString()
  name?: string | null;
  @IsOptional()
  @IsString()
  birth_place?: string | null;
  @IsOptional()
  @IsNumber()
  liability?: number | null;
  @IsOptional()
  @IsString()
  id_card?: string | null;
  @IsOptional()
  @IsString()
  social_number?: string | null;
  @IsOptional()
  @IsString()
  tin?: string | null;
  @IsNotEmpty()
  @IsNumber()
  kind: number;
  @IsOptional()
  @IsEmail()
  string_value_1?: string | null;
  @IsOptional()
  @IsString()
  string_value_2?: string | null;
  @IsOptional()
  @IsNumber()
  number_value_1?: number | null;
  @IsOptional()
  @IsString()
  BIK?: string | null;
  @IsOptional()
  @IsString()
  B_NAME?: string | null;
  @IsOptional()
  @IsNumber()
  DICT_VALUE_1?: number | null;
  @IsOptional()
  @IsString()
  K_ACCOUNT?: string | null;
  @IsOptional()
  @IsString()
  OGRN?: string | null;
  @IsOptional()
  @IsString()
  OKPO?: string | null;
  @IsOptional()
  @IsString()
  OKVED?: string | null;
  @IsOptional()
  @IsString()
  R_ACCOUNT?: string | null;
  @IsOptional()
  @IsNumber()
  PAS_DOC_TYPE?: number | null;
  @IsOptional()
  @IsString()
  PAS_NUMBER?: string | null;
  @IsOptional()
  @IsString()
  PAS_PLACE?: string | null;
  @IsOptional()
  @IsString()
  PAS_SERIES?: string | null;
  @IsNotEmpty()
  @IsValidMoment()
  @Type(() => moment)
  PASS_DT?: moment.Moment | null;
}
