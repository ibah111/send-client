import { requestsInstance } from '../../utils/requests';
import { NameDto } from './dto/name.dto';
import { errorThrow } from '../../utils/errorThrow';

const route = '/reject-statuses/law-act';

export default async function LawActRejectStatusDelete(body: NameDto) {
  try {
    const response = await requestsInstance.delete(route, { data: body });
    return response.data;
  } catch (error) {
    throw errorThrow(error);
  }
}
