import { forkJoin, of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
export interface CommentType {
  dsc: string;
  LawAct: { dsc: string };
}
const url = of('/get_comment');
export default function getComment(data: {
  type: 'law_act' | 'law_exec';
  id: number;
}) {
  return forkJoin([requests, url, of(data)]).pipe(
    post<CommentType>(),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
