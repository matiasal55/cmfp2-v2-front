import Noticias from '../noticias/Principales';
import Calendario from './Calendario';
import '../../styles/index/_noticiasCalendario.scss';

const NoticiasCalendario = (props) => {
    const { scroll } = props;

    return (
        <section className={`section ${scroll ? 'mostrar' : ''}`}>
            <div className='noticias-calendario'>
                <div className='noticias'>
                    <h2>Noticias</h2>
                    <Noticias />
                </div>
                <Calendario />
            </div>
        </section>
    );
};

export default NoticiasCalendario;
