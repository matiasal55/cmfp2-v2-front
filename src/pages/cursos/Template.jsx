import { useParams } from 'react-router-dom';
import Main from '../../components/Main';
import Section from '../../components/Section';
import cursos from './especialidades.json';

const Template = () => {
    const { curso } = useParams();
    const id = parseInt(curso.substring(0, curso.indexOf('-')));
    let data = cursos.filter((curso) => curso.id === id);
    data = data[0];

    const mostrarInscripcion = (data) => {
        const primerCuatrimestre = 'Noviembre del año anterior';
        const segundoCuatrimestre = 'Julio';
        if (data === 1) return <p>{primerCuatrimestre}</p>;
        else if (data === 2) return <p>{segundoCuatrimestre}</p>;
        else if (data === 3)
            return (
                <>
                    <ul>
                        <li>1° cuatrimestre: {primerCuatrimestre}</li>
                        <li>2° cuatrimestre: {segundoCuatrimestre}</li>
                    </ul>
                    <br />
                </>
            );
        else return null;
    };

    const mostrarEstudios = (estudios) => {
        const primario = 'Estudios Primarios Completos';
        const secundario = 'Estudios Secundarios completos';

        if (estudios === 1) return <p>{primario}</p>;
        else if (estudios === 2) return <p>{secundario}</p>;
        else if (estudios === 3)
            return (
                <>
                    <ul>
                        <li>{primario}</li>
                        <li>Montador Electricista</li>
                    </ul>
                    <br />
                </>
            );
        else if (estudios === 4)
            return (
                <>
                    <ul>
                        <li>{primario}</li>
                        <li>Montador de redes y telefonía (Básico) - Recomendado</li>
                    </ul>
                    <br />
                </>
            );
        else return null;
    };

    const mostrarCertificado = (certificados) =>
        typeof data.certificacion === 'object' ? (
            <ul>
                {data.certificacion.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        ) : (
            <p>{data.certificacion}</p>
        );

    return (
        <>
            <Main bgImage={data.imgMain} />
            <Section>
                <h1>{data.titulo}</h1>
                {data.presentacion ? (
                    <div>
                        <h3>Presentación</h3>
                        <p>
                            <p>{data.presentacion}</p>
                        </p>
                    </div>
                ) : null}
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
                    {mostrarEstudios(data.estudios)}
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
                    {mostrarInscripcion(data.inscripcion)}
                </div>
                <div>
                    <h3>Certificación otorgada:</h3>
                    {mostrarCertificado(data.certificacion)}
                </div>
            </Section>
        </>
    );
};

export default Template;
