import Main from '../components/Main';
import Section from '../components/Section';
import Historia from '../components/nosotros/Historia';
import Integrantes from '../components/nosotros/Integrantes';
import background from '../assets/background/nosotros.jpg';
import '../styles/components/_items.scss';

const Nosotros = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Nosotros</h1>
                <Historia />
            </Section>
            <Section>
                <Integrantes />
            </Section>
        </>
    );
};

export default Nosotros;
