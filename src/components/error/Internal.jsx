import Main from '../Main';
import Section from '../Section';
import Button from '../ButtonLink';
import background from '../../assets/background/internal-error.jpg';

const Internal = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>505 - Error interno</h1>
                <p>Tenemos un problema interno en nuestros servidores. El mismo está siendo solucionado. Les pedimos disculpas</p>
                <Button path='/' content='Volver a Home' />
            </Section>
        </>
    );
};

export default Internal;
