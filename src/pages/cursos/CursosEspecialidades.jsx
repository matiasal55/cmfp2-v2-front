import Main from '../../components/Main';
import Section from '../../components/Section';
import background from '../../assets/background/especialidades.jpg';
import Lista from '../../components/cursos/Lista';
import { especialidades } from '../../components/cursos/getCursos';
import { useState, useEffect } from 'react';
import LoadingData from '../../components/LoadingData';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CursosEspecialidades = () => {
    const [loading, setLoading] = useState(true);
    const [cursos, setCursos] = useState([]);
    const [errorMsg, setErrorMsg] = useState('No hay cursos disponibles');

    const listaCursos = async () => {
        const lista = await especialidades();
        setCursos(lista);
        setLoading(false);
    };

    useEffect(() => {
        listaCursos();
    }, []);

    if (!cursos) {
        setCursos([]);
        setErrorMsg('Hubo un problema interno. Intente más tarde. Disculpe las molestias');
    }

    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Cursos Especialidades</h1>
                <h3>Cursos con una duración de 4 meses a 2 años. Una vez finalizado ya podés trabajar de lo que aprendiste.</h3>
                <LoadingData loading={loading} condition={cursos && cursos.length > 0} message={errorMsg}>
                    <Lista cursos={cursos} />
                </LoadingData>
            </Section>
        </>
    );
};

export default CursosEspecialidades;
