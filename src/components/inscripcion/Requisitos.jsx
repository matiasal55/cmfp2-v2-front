const Requisitos = () => {
    return (
        <>
            <div className='requisitos'>
                <h3>Requisitos:</h3>
                <div>
                    <b>Edad del alumno: </b>mayor de 16 años sin límite de edad.
                </div>
                <div>
                    <b>Título mínimo alcanzado: </b>Primario o secundario completo (dependiendo el curso).
                </div>
                <br />
                <div>
                    <h3>Documentación:</h3>
                    <ul>
                        <li>Dos fotocopias de DNI</li>
                        <li>Dos fotocopias de título o analítico de primario o secundario</li>
                        <li>Planilla de inscripción completa</li>
                    </ul>
                </div>
            </div>
            <p>La planilla de inscripción se puede retirar por la institución o se puede descargar acá.</p>
            <div>
                <b>Certificados extranjeros: </b>deberán contener la Apostilla de La Haya (más información en
                https://www.argentina.gob.ar/legalizar-o-apostillar-un-documento).
            </div>
            <br />
            <div>
                * El curso de <b>Auxiliar Administrativo y contable </b>requiere en total 5 (cinco) copias del Titulo y Documento.
            </div>
        </>
    );
};

export default Requisitos;
