import { AxiosResponse } from 'axios';
import { map } from 'rxjs';

export function transformAxios<T>() {
  return map<AxiosResponse<T>, T>((res) => res.data);
}
