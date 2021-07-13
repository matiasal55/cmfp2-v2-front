import Main from '../../components/Main';
import Section from '../../components/Section';
import background from '../../assets/background/especialidades.jpg';
import cursos from '../../components/cursos/especialidades.json';
import Lista from '../../components/cursos/Lista';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CursosEspecialidades = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Cursos Especialidades</h1>
                <h3>Cursos con una duración de 4 meses a 2 años. Una vez finalizado ya podés trabajar de lo que aprendiste.</h3>
                {loading ? <Spinner /> : <Lista cursos={cursos} />}
            </Section>
        </>
    );
};

export default CursosEspecialidades;
