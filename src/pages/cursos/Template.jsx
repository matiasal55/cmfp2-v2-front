import { useParams } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';
import cursos from './especialidades.json';
import Contenidos from '../../components/cursos/Contenidos';
import Presentacion from '../../components/cursos/Presentacion';
import Requisitos from '../../components/cursos/Requisitos';
import Duracion from '../../components/cursos/Duracion';
import Inscripcion from '../../components/cursos/Inscripcion';
import Certificacion from './Certificacion';
import Dias from '../../components/cursos/Dias';
import '../../styles/components/_items.scss';

const Template = () => {
    const { curso } = useParams();
    const id = parseInt(curso.substring(0, curso.indexOf('-')));
    let data = cursos.filter((curso) => curso.id === id);
    data = data[0];

    return (
        <>
            <Main bgImage={data.imgMain} />
            <Section>
                <h1>{data.titulo}</h1>
                {data.presentacion ? <Presentacion texto={data.presentacion} /> : null}
                <Contenidos contenidos={data.contenidos} />
                <Requisitos requisitos={data.estudios} />
                <Duracion tiempo={data.duracion} />
                <Dias dias={data.dias} />
                <Inscripcion inscripcion={data.inscripcion} />
                <Certificacion certificados={data.certificacion} />
            </Section>
        </>
    );
};

export default Template;
