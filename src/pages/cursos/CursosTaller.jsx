import { Link } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';
import background from '../../assets/background/especialidades.jpg';

const CursosTaller = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Cursos Taller</h1>
                <h3>Talleres de corta duración. Con posibilidades de salida laboral.</h3>
                <Link to='/cursos-taller/5'>Prueba</Link>
            </Section>
        </>
    );
};

export default CursosTaller;
