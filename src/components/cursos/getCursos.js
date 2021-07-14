import { getHandler } from '../../utils/requestHandler';

export const especialidades = async () => {
    let lista;
    try {
        lista = await getHandler('/cursos/especialidades');
    } catch (e) {
        lista = [];
    } finally {
        return lista;
    }
};
