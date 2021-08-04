import { getHandler } from '../../utils/requestHandler';

export const getTodasNoticias = async () => {
    const noticias = await getData('all');
    return noticias;
};

export const getUltimasNoticias = async () => {
    const noticias = await getData('last');
    return noticias;
};

const getData = async (section) => {
    const data = await getHandler('/noticias/' + section);
    return data;
};
