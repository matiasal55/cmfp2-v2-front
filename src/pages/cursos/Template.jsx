import { useParams } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';
import Contenidos from '../../components/cursos/Contenidos';
import Presentacion from '../../components/cursos/Presentacion';
import Requisitos from '../../components/cursos/Requisitos';
import Duracion from '../../components/cursos/Duracion';
import Inscripcion from '../../components/cursos/Inscripcion';
import Certificacion from '../../components/cursos/Certificacion';
import Dias from '../../components/cursos/Dias';
import { getCurso } from '../../components/cursos/getCursos';
import '../../styles/components/_items.scss';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';

const Template = ({ section }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { curso } = useParams();
    const id = parseInt(curso.substring(0, curso.indexOf('-')));

    const request = async (section, id) => {
        const curso = await getCurso(section, id);
        setData(curso);
        setLoading(false);
    };

    useEffect(() => {
        request(section, id);
    }, []);

    return (
        <>
            <Main bgImage={data.imgMain} />
            <Section>
                {loading ? (
                    <Spinner />
                ) : data ? (
                    <>
                        <h1>{data.titulo}</h1>
                        {data.presentacion ? <Presentacion texto={data.presentacion} /> : null}
                        <Contenidos contenidos={data.contenidos} />
                        <Requisitos requisitos={data.estudios} />
                        <Duracion tiempo={data.duracion} />
                        <Dias dias={data.dias} />
                        <Inscripcion inscripcion={data.inscripcion} />
                        <Certificacion certificados={data.certificacion} />
                    </>
                ) : (
                    <h3>No hay información para el curso</h3>
                )}
            </Section>
        </>
    );
};

export default Template;
