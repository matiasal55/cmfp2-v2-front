import '../../styles/components/_items.scss';

const Requisitos = () => {
    return (
        <>
            <div className='requisitos item'>
                <h3>Requisitos:</h3>
                <div>
                    <b>Edad del alumno: </b>mayor de 16 años sin límite de edad.
                </div>
                <div>
                    <b>Título mínimo alcanzado: </b>Primario o secundario completo (dependiendo el curso).
                </div>
            </div>
            <div>
                <h3>Documentación:</h3>
                <ul>
                    <li>Dos fotocopias de DNI</li>
                    <li>Dos fotocopias de título o analítico de primario o secundario</li>
                    <li>Planilla de inscripción completa</li>
                </ul>
            </div>
            <p>La planilla de inscripción se puede retirar por la institución o se puede descargar acá.</p>
            <div className='item'>
                <b>Certificados extranjeros: </b>deberán contener la Apostilla de La Haya (más información en
                https://www.argentina.gob.ar/legalizar-o-apostillar-un-documento).
            </div>
            <div>
                * El curso de <b>Auxiliar Administrativo y contable </b>requiere en total 5 (cinco) copias del Titulo y Documento.
            </div>
        </>
    );
};

export default Requisitos;
