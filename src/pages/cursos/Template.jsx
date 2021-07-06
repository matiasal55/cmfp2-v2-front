import { useParams } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';
import cursos from './especialidades.json';

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
                <div>
                    <h3>Contenidos:</h3>
                    <ul>
                        {data.contenidos.map((contenido, index) => (
                            <li key={index}>{contenido}</li>
                        ))}
                    </ul>
                </div>
                <br />
                <div>
                    <h3>Requisitos:</h3>
                    <p>Estudios {data.estudios === 1 ? 'Primarios' : 'Secundarios'} completos.</p>
                </div>
                <div>
                    <h3>Duración:</h3>
                    <p>{data.duracion === 1 ? '1 Cuatrimestre' : data.duracion === 2 ? '1 Año' : '2 Años'}</p>
                </div>
                <div>
                    <h3>Días y horarios a cursar:</h3>
                    <p>{data.dias} de 18 a 22hs</p>
                </div>
                <div>
                    <h3>Comienzo de Inscripción:</h3>
                    <p>{data.inscripcion}</p>
                </div>
                <div>
                    <h3>Certificación otorgada:</h3>
                    <p>{data.certificacion}</p>
                </div>
            </Section>
        </>
    );
};

export default Template;
