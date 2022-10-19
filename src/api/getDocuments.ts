import { DocAttach } from '@contact/models';
import processError from '../utils/processError';
import requests from '../utils/requests';
type types = 'doc' | 'law_exec';
type results<T extends types> = T extends 'doc' ? Blob : DocAttach[];
export default async function getDocuments<T extends types>(
  id: number,
  type: T,
): Promise<results<T>> {
  try {
    switch (type) {
      case 'doc':
        return (
          await requests.post<results<T>>(
            '/documents',
            { id },
            { responseType: 'blob' },
          )
        ).data;
      case 'law_exec':
        return (
          await requests.post<results<T>>('/documents', {
            law_exec_id: id,
          })
        ).data;
      default:
        return (
          await requests.post<results<T>>('/documents', {
            law_exec_id: id,
          })
        ).data;
    }
  } catch (e) {
    processError(e);
    throw e;
  }
}
