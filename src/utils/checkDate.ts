import moment, { MomentInput } from 'moment';
import { TypesData } from '../Reducer/Send';

export default function checkDate(value: TypesData, availableEmpty = false) {
  if (value === null) {
    if (!availableEmpty) {
      return 'empty';
    }
  } else {
    if (
      moment(value as MomentInput, 'DD.MM.YYYY', true).isValid() ||
      moment(value as MomentInput, moment.ISO_8601, true).isValid()
    ) {
      return null;
    } else {
      return 'invalid_date';
    }
  }
}
