import Noticias from '../noticias/Principales';
import Calendario from './Calendario';
import '../../styles/index/_noticiasCalendario.scss';

const NoticiasCalendario = (props) => {
    return (
        <>
            <div className='noticias-calendario'>
                <div className='noticias-index'>
                    <h2>Noticias</h2>
                    <Noticias />
                </div>
                <Calendario />
            </div>
        </>
    );
};

export default NoticiasCalendario;
