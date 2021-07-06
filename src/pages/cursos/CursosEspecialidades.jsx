import Main from '../../components/Main';
import Section from '../../components/Section';
import background from '../../assets/background/especialidades.jpg';
import cursos from './especialidades.json';
import Lista from './Lista';

const CursosEspecialidades = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Cursos Especialidades</h1>
                <h3>Cursos con una duración de 4 meses a 2 años. Una vez finalizado ya podés trabajar de lo que aprendiste.</h3>
                <Lista cursos={cursos} />
            </Section>
        </>
    );
};

export default CursosEspecialidades;
