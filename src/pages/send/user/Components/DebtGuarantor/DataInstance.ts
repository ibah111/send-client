import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import moment from 'moment';
import { NullOrMoment } from './validation/isValidMoment';
import {
  IsNotEmpty,
  IsInn,
  IsEmail,
  IsNumber,
  IsValidMoment,
} from './validation/locale';
const getDate = (date?: boolean) => (date ? Date : moment);
const getTransform = (date?: boolean) =>
  date ? ({ value }: TransformFnParams) => value : NullOrMoment;
export function createInstance(date?: boolean) {
  class DataInstance {
    @IsNotEmpty()
    fio: string;
    @IsNumber()
    @IsNotEmpty()
    parent_id: number;
    @IsValidMoment()
    @IsNotEmpty()
    @Type(() => getDate(date))
    @Transform(getTransform(date))
    birth_date: moment.Moment;
    @IsString()
    @IsOptional()
    passport: string;
    @IsString()
    @IsNotEmpty()
    sex: string;
    @IsNumber()
    @IsOptional()
    id?: number;
    @IsNumber()
    @IsOptional()
    sum?: number | null;
    @IsString()
    @IsOptional()
    dsc?: string | null;
    @IsString()
    @IsOptional()
    address?: string | null;
    @IsNumber()
    @IsNotEmpty()
    typ: number;
    @IsString()
    @IsOptional()
    ext_id?: string | null;
    @IsNumber()
    @IsOptional()
    family_status?: number | null;
    @IsNumber()
    @IsOptional()
    education?: number | null;
    @IsString()
    @IsOptional()
    company_name?: string | null;
    @IsString()
    @IsOptional()
    position?: string | null;
    @IsInn()
    @IsOptional()
    inn?: string | null;
    @IsString()
    @IsOptional()
    kpp?: string | null;
    @IsString()
    @IsOptional()
    pay_info?: string | null;
    @IsString()
    @IsOptional()
    director_fio?: string | null;
    @IsString()
    @IsOptional()
    contract?: string | null;
    @IsValidMoment()
    @IsOptional()
    @Type(() => getDate(date))
    @Transform(getTransform(date))
    start_date?: moment.Moment | null;
    @IsValidMoment()
    @IsOptional()
    @Type(() => getDate(date))
    @Transform(getTransform(date))
    end_date?: moment.Moment | null;
    @IsValidMoment()
    @IsOptional()
    @Type(() => getDate(date))
    @Transform(getTransform(date))
    finish_date?: moment.Moment | null;
    @IsNumber()
    @IsOptional()
    currency?: number | null;
    @IsNumber()
    @IsOptional()
    real_sum?: number | null;
    @IsNumber()
    @IsOptional()
    fair_sum?: number | null;
    @IsNumber()
    @IsOptional()
    quality_coeff?: number | null;
    @IsString()
    @IsOptional()
    name?: string | null;
    @IsString()
    @IsOptional()
    birth_place?: string | null;
    @IsNumber()
    @IsOptional()
    liability?: number | null;
    @IsString()
    @IsOptional()
    id_card?: string | null;
    @IsString()
    @IsOptional()
    social_number?: string | null;
    @IsString()
    @IsOptional()
    tin?: string | null;
    @IsNumber()
    @IsNotEmpty()
    kind: number;
    @IsEmail()
    @IsOptional()
    string_value_1?: string | null;
    @IsString()
    @IsOptional()
    string_value_2?: string | null;
    @IsNumber()
    @IsOptional()
    number_value_1?: number | null;
    @IsString()
    @IsOptional()
    BIK?: string | null;
    @IsString()
    @IsOptional()
    B_NAME?: string | null;
    @IsNumber()
    @IsOptional()
    DICT_VALUE_1?: number | null;
    @IsString()
    @IsOptional()
    K_ACCOUNT?: string | null;
    @IsString()
    @IsOptional()
    OGRN?: string | null;
    @IsString()
    @IsOptional()
    OKPO?: string | null;
    @IsString()
    @IsOptional()
    OKVED?: string | null;
    @IsString()
    @IsOptional()
    R_ACCOUNT?: string | null;
    @IsNumber()
    @IsOptional()
    PAS_DOC_TYPE?: number | null;
    @IsString()
    @IsOptional()
    PAS_NUMBER?: string | null;
    @IsString()
    @IsOptional()
    PAS_PLACE?: string | null;
    @IsString()
    @IsOptional()
    PAS_SERIES?: string | null;
    @IsValidMoment()
    @Type(() => getDate(date))
    @Transform(getTransform(date))
    PASS_DT?: moment.Moment | null;
  }
  return DataInstance;
}
