const Certificacion = ({ certificados }) => {
    const mostrarCertificado = (certificados) =>
        typeof certificados === 'object' ? (
            <ul>
                {certificados.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        ) : (
            <p>{certificados}</p>
        );

    return (
        <div>
            <h3>Certificación otorgada:</h3>
            {mostrarCertificado(certificados)}
        </div>
    );
};

export default Certificacion;
