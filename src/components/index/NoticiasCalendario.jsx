import Noticias from '../noticias/Principales';
import Calendario from './Calendario';
import Section from '../Section';
import '../../styles/index/_noticiasCalendario.scss';

const NoticiasCalendario = (props) => {
    return (
        <Section>
            <div className='noticias-calendario'>
                <Noticias />
                <Calendario />
            </div>
        </Section>
    );
};

export default NoticiasCalendario;
