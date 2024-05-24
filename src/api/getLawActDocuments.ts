import { DocAttach } from '@contact/models';
import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
const url = of('/documents/getLawAct');
export default function getLawActDocuments(law_act_id: number) {
  return forkJoin([
    requests,
    url,
    of({
      law_act_id,
    }),
  ]).pipe(post<DocAttach[]>(), transformAxios(), transformError(), authRetry());
}
