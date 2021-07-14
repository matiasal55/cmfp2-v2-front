import { getHandler } from '../../utils/requestHandler';

export const especialidades = async () => {
    const lista = await getData('especialidades');
    return lista;
};

export const taller = async () => {
    const lista = await getData('taller');
    return lista;
};

const getData = async (section) => {
    let lista;
    try {
        lista = await getHandler('/cursos/' + section);
    } catch (e) {
        lista = [];
    } finally {
        return lista;
    }
};
