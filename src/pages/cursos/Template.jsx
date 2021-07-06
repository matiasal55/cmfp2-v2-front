import { useParams } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';

const Template = () => {
    const { curso } = useParams();

    return (
        <>
            <Main />
            <Section>
                <h1>Curso Nombre {curso}</h1>
            </Section>
        </>
    );
};

export default Template;
