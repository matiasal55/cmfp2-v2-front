import Main from '../components/Main';
import Section from '../components/Section';
import Informacion from '../components/inscripcion/Informacion';
import Requisitos from '../components/inscripcion/Requisitos';
import '../styles/pages/_inscripcion.scss';
import background from '../assets/background/inscripcion.jpg';

const Inscripcion = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Inscripción</h1>
                <h2>Próxima fecha de inscripción: del 00 de LoremIpsum al 00 de LoremIpsum de 2020.</h2>
                <Informacion />
                <Requisitos />
            </Section>
        </>
    );
};

export default Inscripcion;
