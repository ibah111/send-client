import { TypesData } from '../Reducer/Send';

export default function checkNumber(value: TypesData) {
  if (!value) {
    return 'empty';
  } else {
    if (value === 0) {
      return 'number_0';
    } else {
      return null;
    }
  }
}
