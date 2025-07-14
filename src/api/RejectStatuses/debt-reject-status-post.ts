import { requestsInstance } from '../../utils/requests';
import { errorThrow } from '../../utils/errorThrow';
import { IdDto } from './dto/id.dto';

const route = '/reject-statuses/debt';

export default async function DebtRejectStatusPost(body: IdDto) {
  try {
    const response = await requestsInstance.post(route, body);
    return response.data;
  } catch (error) {
    throw errorThrow(error);
  }
}
