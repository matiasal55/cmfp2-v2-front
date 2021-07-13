import Noticias from '../noticias/Principales';
import Calendario from './Calendario';
import Section from '../Section';
import '../../styles/index/_noticiasCalendario.scss';

const NoticiasCalendario = (props) => {
    return (
        <Section>
            <div className='noticias-calendario'>
                <div className='noticias'>
                    <h2>Noticias</h2>
                    <Noticias />
                </div>
                <Calendario />
            </div>
        </Section>
    );
};

export default NoticiasCalendario;
