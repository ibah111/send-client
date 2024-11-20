import { defer, forkJoin, of } from 'rxjs';
import store from '../Reducer';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
type FileUpdate =
  | false
  | {
      file: { data: number[] };
      name: string;
    };

function getPrecision(num: number): number {
  const value = (Math.round(num * 100) / 100).toFixed(2);
  return Number(value);
}

export default function updateExec() {
  const url = of('/update_exec');
  const storeState = store.getState().Send;
  const data = defer(() =>
    of({
      ...storeState,
      court_sum: getPrecision(store.getState().Send.court_sum as number),
      debt_payments_sum: getPrecision(
        store.getState().Send.debt_payments_sum as number,
      ),
      total_sum: getPrecision(store.getState().Send.total_sum as number),
      options: { save_file: true },
    }),
  );
  return forkJoin([requests, url, data]).pipe(
    post<FileUpdate>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
