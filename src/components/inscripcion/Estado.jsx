import Button from '../ButtonLink';

const Estado = () => {
    const abierta = false;
    const habilitados = ['Telefonía IP', 'Redes informáticas', 'Herrería', 'Sistema de alarmas'];

    if (!abierta) return <h2>Próxima fecha de inscripción: del 00 de LoremIpsum al 00 de LoremIpsum de 2020.</h2>;

    return (
        <div>
            <h2>Atención. Ya está abierta la inscripción para los siguiente cursos:</h2>
            <ul>
                {habilitados.map((curso, key) => (
                    <li key={key}>{curso}</li>
                ))}
            </ul>
            <Button path='/inscripcion/sistema' content='Comenzar la Inscripción' />
        </div>
    );
};

export default Estado;
