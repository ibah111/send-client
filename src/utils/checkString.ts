import { TypesData } from '../Reducer/Send';

export default function checkString(value: TypesData) {
  if (!value) {
    return 'empty';
  } else {
    return null;
  }
}
