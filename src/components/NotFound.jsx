import Main from './Main';
import Section from './Section';
import Button from './ButtonLink';
import background from '../assets/background/not-found.jpg';

const NotFound = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>404 - Página no encontrada</h1>
                <p>La dirección ingresada es incorrecta.</p>
                <Button path='/' content='Volver a Home' />
            </Section>
        </>
    );
};

export default NotFound;
