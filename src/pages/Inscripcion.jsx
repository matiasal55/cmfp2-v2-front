import Main from '../components/Main';
import Section from '../components/Section';
import Informacion from '../components/inscripcion/Informacion';
import Requisitos from '../components/inscripcion/Requisitos';
import Estado from '../components/inscripcion/Estado';
import '../styles/pages/_inscripcion.scss';
import background from '../assets/background/inscripcion.jpg';

const Inscripcion = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Inscripción</h1>
                <Estado />
                <Informacion />
                <Requisitos />
            </Section>
        </>
    );
};

export default Inscripcion;
