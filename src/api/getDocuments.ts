import { DocAttach } from '@contact/models';
import { forkJoin, map, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
import { AxiosRequestConfig } from 'axios';
type types = 'doc' | 'law_exec';
type results<T extends types> = T extends 'doc' ? Blob : DocAttach[];
const url = of('/documents/get');
export default function getDocuments<T extends types>(id: number, type: T) {
  return forkJoin([
    requests,
    url,
    of([id, type]).pipe(
      map(([id, type]) => {
        if (type === 'doc') return { id };
        return { law_exec_id: id };
      }),
    ),
    of(type).pipe(
      map((type) => {
        if (type === 'doc')
          return { iresponseType: 'blob' } as AxiosRequestConfig;
        return {};
      }),
    ),
  ]).pipe(post<results<T>>(), transformAxios(), transformError(), authRetry());
}
