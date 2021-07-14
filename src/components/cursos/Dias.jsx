const Dias = ({ dias }) => {
    return (
        <div className='item'>
            <h3>Días y horarios a cursar:</h3>
            <ul>
                {dias.map((dia, index) => (
                    <li key={index}>{dia}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dias;
