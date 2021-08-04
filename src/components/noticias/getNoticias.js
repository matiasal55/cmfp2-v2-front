import { getHandler } from '../../utils/requestHandler';

export const getTodasNoticias = async () => {
    const noticias = await getHandler('/noticias/all');
    return noticias;
};
