import axios from 'axios';
import server from '../utils/server';
export interface CommentType {
  dsc: string;
  LawAct: { dsc: string };
}
export default async function getComment(data: {
  type: 'law_act' | 'law_exec';
  id: number;
}) {
  const response = await axios.post<CommentType>(
    server() + '/get_comment',
    data,
  );
  return response.data;
}
