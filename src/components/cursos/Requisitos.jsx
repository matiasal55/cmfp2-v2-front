const Requisitos = ({ requisitos }) => {
    const mostrarEstudios = (estudios) => {
        const primario = 'Estudios Primarios Completos';
        const secundario = 'Estudios Secundarios completos';

        if (estudios === 1) return <p>{primario}</p>;
        else if (estudios === 2) return <p>{secundario}</p>;
        else if (estudios === 3)
            return (
                <ul>
                    <li>{primario}</li>
                    <li>Montador Electricista</li>
                </ul>
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

    return (
        <div className='item'>
            <h3>Requisitos:</h3>
            {mostrarEstudios(requisitos)}
        </div>
    );
};

export default Requisitos;
