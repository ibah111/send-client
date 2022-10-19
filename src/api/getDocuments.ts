import { DocAttach } from '@contact/models';
import axios from 'axios';
import server from '../utils/server';
type types = 'doc' | 'law_exec';
type results<T extends types> = T extends 'doc' ? Blob : DocAttach[];
export default async function getDocuments<T extends types>(
  id: number,
  type: T,
): Promise<results<T>> {
  switch (type) {
    case 'doc':
      return (
        await axios.post<results<T>>(
          server() + '/documents',
          { id },
          { responseType: 'blob' },
        )
      ).data;
    case 'law_exec':
      return (
        await axios.post<results<T>>(server() + '/documents', {
          law_exec_id: id,
        })
      ).data;
    default:
      return (
        await axios.post<results<T>>(server() + '/documents', {
          law_exec_id: id,
        })
      ).data;
  }
}
