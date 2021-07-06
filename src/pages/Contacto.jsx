import Main from '../components/Main';
import Section from '../components/Section';
import background from '../assets/background/contacto.jpg';
import Formulario from '../components/contacto/Formulario';

const Contacto = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Contacto</h1>
                <p>
                    Podés contactarnos a través del siguiente formulario o por email enviando un mensaje a <b>cmfp@yahoo.com</b>. También podés llamar al{' '}
                    <b>(011) 4629 - 1781</b>.
                </p>
                <Formulario />
            </Section>
        </>
    );
};

export default Contacto;
