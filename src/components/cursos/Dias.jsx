const Dias = ({ dias }) => {
    const mostrarDias = (dias) => {
        if (typeof dias === 'string') return <p>{dias}</p>;
        return (
            <ul>
                {dias.map((dia, index) => (
                    <li key={index}>{dia}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className='item'>
            <h3>Días y horarios a cursar:</h3>
            {mostrarDias(dias)}
        </div>
    );
};

export default Dias;
