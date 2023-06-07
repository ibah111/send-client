import { of } from 'rxjs';
import requests from '../utils/requests';
import { post } from '../utils/rxjs-pipes/post';
import { transformAxios } from '../utils/rxjs-pipes/transformAxios';
import { transformError } from '../utils/rxjs-pipes/transformError';
import { authRetry } from '../utils/rxjs-pipes/authRetry';
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
