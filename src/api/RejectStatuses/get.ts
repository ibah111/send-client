import { requestsInstance } from '../../utils/requests';

interface RejectStatuses {
  debt_reject_statuses: number[];
  law_act_reject_statuses: string[];
}

export default async function getRejectStatuses(): Promise<RejectStatuses> {
  const route = '/reject-statuses';
  try {
    const response = await requestsInstance.get(route);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
