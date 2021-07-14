const Certificacion = ({ certificados }) => {
    return (
        <div>
            <h3>Certificación otorgada:</h3>
            <ul>
                {certificados.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </div>
    );
};

export default Certificacion;
