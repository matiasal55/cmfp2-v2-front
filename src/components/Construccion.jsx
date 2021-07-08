import Main from './Main';
import Section from './Section';
import Button from './ButtonLink';
import background from '../assets/background/construccion.jpg';

const Construccion = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Página en construcción</h1>
                <p>Estamos en plena construcción del sitio al que intentó dirigirse. Próximamente tendrá la mejor experiencia con este sitio.</p>
                <Button path='/' content='Volver a Home' />
            </Section>
        </>
    );
};

export default Construccion;
