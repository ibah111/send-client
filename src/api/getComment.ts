import processError from '../utils/processError';
import requests from '../utils/requests';
export interface CommentType {
  dsc: string;
  LawAct: { dsc: string };
}
export default async function getComment(data: {
  type: 'law_act' | 'law_exec';
  id: number;
}) {
  try {
    const response = await requests.post<CommentType>('/get_comment', data);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
