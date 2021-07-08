const Duracion = ({ tiempo }) => {
    return (
        <div>
            <h3>Duración:</h3>
            <p>{tiempo === 1 ? '1 Cuatrimestre' : tiempo === 2 ? '1 Año' : '2 Años'}</p>
        </div>
    );
};

export default Duracion;
