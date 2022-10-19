import store from '../Reducer';
import processError from '../utils/processError';
import requests from '../utils/requests';
type FileUpdate =
  | false
  | {
      file: { data: number[] };
      name: string;
    };
export default async function updateExec() {
  try {
    const data = store.getState().Send;
    const response = await requests.post<FileUpdate>('/update_exec', data);
    return response.data;
  } catch (e) {
    processError(e);
    throw e;
  }
}
