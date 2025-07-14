import { IdDto } from './dto/id.dto';
import { requestsInstance } from '../../utils/requests';
import { errorThrow } from '../../utils/errorThrow';

const route = '/reject-statuses/debt';

export default async function DebtRejectStatusDelete(body: IdDto) {
  try {
    const response = await requestsInstance.delete(route, { data: body });
    return response.data;
  } catch (error) {
    throw errorThrow(error);
  }
}
