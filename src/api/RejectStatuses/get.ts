import { requestsInstance } from '../../utils/requests';
import { errorThrow } from '../../utils/errorThrow';

interface RejectStatuses {
  debt_reject_statuses: number[];
  law_act_reject_statuses: string[];
}

const route = '/reject-statuses';

export default async function getRejectStatuses(): Promise<RejectStatuses> {
  try {
    const response = await requestsInstance.get(route);
    return response.data;
  } catch (error) {
    throw errorThrow(error);
  }
}
