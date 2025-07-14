import { requestsInstance } from '../../utils/requests';
import { NameDto } from './dto/name.dto';
import { errorThrow } from '../../utils/errorThrow';

const route = '/reject-statuses/law-act';

export default async function LawActRejectStatusPost(body: NameDto) {
  try {
    const response = await requestsInstance.post(route, body);
    return response.data;
  } catch (error) {
    throw errorThrow(error);
  }
}
