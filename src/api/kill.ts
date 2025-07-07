import { transformAxios } from '@tools/rxjs-pipes';
import { post } from '@tools/rxjs-pipes';
import { forkJoin, of } from 'rxjs';

import { transformError } from '../utils/processError';

export default async function kill() {
  const route = of('/kill');
  // @ts-ignore
  return forkJoin([route]).pipe(post(), transformAxios(), transformError());
}
