import Main from '../components/Main';
import Section from '../components/Section';

const Inscripcion = () => {
    return (
        <>
            <Main />
            <Section>
                <h1>Inscripción</h1>
                <h2>Próxima fecha de inscripción: del 00 de LoremIpsum al 00 de LoremIpsum de 2020.</h2>
                <br />
                <p>
                    Las inscripciones se realizan en
                    <b> este sitio</b> o en la escuela de forma personal, en Maestra Cueto 750, Morón,
                    <b> en el horario de 18 a 20hs.</b>
                </p>
                <br />
                <p>
                    La cantidad de inscriptos tiene un cupo máximo. En el caso de alcanzar dicho límite se da la posibilidad de anotarse en una lista de espera,
                    solicitando solamente sus datos personales para contactarse en caso de liberarse un cupo. Los cupos se liberan cuando los inscriptos en
                    primera instancia no presentan la documentación en tiempo y forma o se ausentan en el transcurso de las 3 (tres) primeras clases. En caso de
                    ser elegido para ocupar el cupo deberá presenciar a la clase en la fecha indicada a horario y con la documentación completa. De no cumplirse
                    alguno de estos puntos perderá el lugar y será cedido al siguiente en la lista.
                </p>
                <br />
                <p>
                    Los cursos de Especializaciones no son arancelados. El aporte es voluntario y se realiza cada mes en la Oficina de Atención. Este aporte
                    está destinado a solventar los costos propios del desarrollo de cada curso y contribuye al equipamiento necesario para que se lleven a cabo.
                </p>
                <p>Los Cursos Taller sí son arancelados debido a que son de corta duración y se requiere material más específico.</p>
                <br />
                <p>
                    Para más información llamar al <b> (011) 4629-1781.</b>
                </p>
                <br />
                <h3>Requisitos:</h3>
                <div>
                    <b>Edad del alumno: </b>mayor de 16 años sin límite de edad.
                </div>
                <div>
                    <b>Título mínimo alcanzado: </b>Primario o secundario completo (dependiendo el curso).
                </div>
                <br />
                <div>
                    <b>Documentación:</b>
                    <ul>
                        <li>Dos fotocopias de DNI</li>
                        <li>Dos fotocopias de título o analítico de primario o secundario</li>
                        <li>Planilla de inscripción completa</li>
                    </ul>
                </div>
                <br />
                <p>La planilla de inscripción se puede retirar por la institución o se puede descargar acá.</p>
                <br />
                <div>
                    <b>Certificados extranjeros: </b>deberán contener la Apostilla de La Haya (más información en
                    https://www.argentina.gob.ar/legalizar-o-apostillar-un-documento).
                </div>
                <div>
                    * El curso de <b>Auxiliar Administrativo y contable </b>requiere en total 5 (cinco) copias del Titulo y Documento.
                </div>
            </Section>
        </>
    );
};

export default Inscripcion;
