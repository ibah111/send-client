import '@contact/models';
import { TypDate } from '@contact/models';
declare module '@contact/models' {
  export interface CustomOptionsModels {
    date: TypDate.LUXON;
  }
}
