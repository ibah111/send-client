import { requestsInstance } from '../../utils/requests';
import { enqueueSnackbar } from 'notistack';

interface Props {
  r_requisites_id: number;
  r_portfolio_id: number;
}

export default async function DeletePortfolioToRequisitesLink({
  ...body
}: Props) {
  const url = 'PortfoliosToRequisites/deletePortfolioToRequisitesLink';
  try {
    return await requestsInstance.post(url, {
      ...body,
    });
  } catch (error) {
    console.log(error);
    enqueueSnackbar('Произошла ошибка. Нажмите F12 чтобы увидеть подробности', {
      variant: 'error',
    });
    throw Error('Произошла ошибка');
  }
}
