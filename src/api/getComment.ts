import { Observable } from 'rxjs';
import {
  createError,
  createNextDefault,
  createRetry,
} from '../utils/processError';
import requests from '../utils/requests';
export interface CommentType {
  dsc: string;
  LawAct: { dsc: string };
}
export default function getComment(data: {
  type: 'law_act' | 'law_exec';
  id: number;
}) {
  return new Observable<CommentType>((subscriber) => {
    requests
      .post<CommentType>('/get_comment', data)
      .then(createNextDefault(subscriber))
      .catch(createError(subscriber));
  }).pipe(createRetry());
}
