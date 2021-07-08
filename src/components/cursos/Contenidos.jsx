const Contenidos = ({ contenidos }) => {
    return (
        <div className='item'>
            <h3>Contenidos:</h3>
            <ul>
                {contenidos.map((contenido, index) => (
                    <li key={index}>{contenido}</li>
                ))}
            </ul>
        </div>
    );
};

export default Contenidos;
