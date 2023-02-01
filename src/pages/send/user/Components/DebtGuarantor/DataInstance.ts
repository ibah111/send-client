import { Transform, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import moment from 'moment';
import { NullOrMoment } from './validation/checker';
import { IsNotEmpty, IsInn, IsEmail, IsNumber } from './validation/locale';

export class DataInstance {
  @IsNotEmpty()
  fio: string;
  @IsNotEmpty()
  @IsNumber()
  parent_id: number;
  @IsNotEmpty()
  @Type(() => Date)
  @Transform(NullOrMoment, {
    toClassOnly: true,
  })
  birth_date: moment.Moment;
  passport: string;
  @IsNotEmpty()
  sex: string;
  id?: number;
  sum?: number | null;
  dsc?: string | null;
  address?: string | null;
  @IsNotEmpty()
  typ: number;
  ext_id?: string | null;
  family_status?: number | null;
  education?: number | null;
  company_name?: string | null;
  position?: string | null;
  @IsOptional()
  @IsInn()
  inn?: string | null;
  kpp?: string | null;
  pay_info?: string | null;
  director_fio?: string | null;
  contract?: string | null;
  start_date?: moment.Moment | null;
  end_date?: moment.Moment | null;
  finish_date?: moment.Moment | null;
  currency?: number | null;
  real_sum?: number | null;
  fair_sum?: number | null;
  quality_coeff?: number | null;
  name?: string | null;
  birth_place?: string | null;
  liability?: number | null;
  id_card?: string | null;
  social_number?: string | null;
  tin?: string | null;
  @IsNotEmpty()
  kind: number;
  @IsOptional()
  @IsEmail()
  string_value_1?: string | null;
  string_value_2?: string | null;
  number_value_1?: number | null;
  BIK?: string | null;
  B_NAME?: string | null;
  DICT_VALUE_1?: number | null;
  K_ACCOUNT?: string | null;
  OGRN?: string | null;
  OKPO?: string | null;
  OKVED?: string | null;
  R_ACCOUNT?: string | null;
  PAS_DOC_TYPE?: number | null;
  PAS_NUMBER?: string | null;
  PAS_PLACE?: string | null;
  PAS_SERIES?: string | null;
  PASS_DT?: moment.Moment | null;
}
