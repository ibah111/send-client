import { of } from 'rxjs';
import requests from '../utils/requests';
import { post, transformAxios, authRetry } from '@tools/rxjs-pipes/axios';
import { transformError } from '../utils/processError';
export interface CommentType {
  dsc: string;
  LawAct: { dsc: string };
}
export default function getComment(data: {
  type: 'law_act' | 'law_exec';
  id: number;
}) {
  return of(data).pipe(
    post<CommentType>(requests, '/get_comment'),
    transformAxios(),
    transformError(),
    authRetry(),
  );
}
