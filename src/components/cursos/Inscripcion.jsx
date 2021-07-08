const Inscripcion = ({ inscripcion }) => {
    const mostrarInscripcion = (data) => {
        const primerCuatrimestre = 'Noviembre del año anterior';
        const segundoCuatrimestre = 'Julio';
        if (data === 1) return <p>{primerCuatrimestre}</p>;
        else if (data === 2) return <p>{segundoCuatrimestre}</p>;
        else if (data === 3)
            return (
                <ul>
                    <li>1° cuatrimestre: {primerCuatrimestre}</li>
                    <li>2° cuatrimestre: {segundoCuatrimestre}</li>
                </ul>
            );
        else return null;
    };

    return (
        <div className='item'>
            <h3>Comienzo de Inscripción:</h3>
            {mostrarInscripcion(inscripcion)}
        </div>
    );
};

export default Inscripcion;
