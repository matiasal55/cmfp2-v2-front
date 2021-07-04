import Main from '../components/Main';
import Section from '../components/Section';
import background from '../assets/background/nosotros.jpg';

const Nosotros = () => {
    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Nosotros</h1>
                <h2>Historia</h2>
                <p>
                    En 1948, el entonces Intendente de Morón César A. Albistur Villegas, crea la rama de escuelas nocturnas de Capacitación Laboral, integrada
                    por la Escuela de Orientación Profesional N° 1 “Ricardo Rojas”, la Escuela Municipal N° 2 de Música y Danzas “Julián Aguirre” y la Escuela
                    de Capacitación Laboral N° 3 de Ituzaingó “Paula Albarracín”. En 1963 se crea la Escuela Municipal de Orientación Profesional N° 4 “Manuel
                    Belgrano”.
                </p>
                <p>
                    Para principios de 1981 y luego de haber tenido varios domicilios, la Escuela Manuel Belgrano se encontraba localizada en Barrio San Juan
                    (Castelar Sur), entre las calles William Morris y Casacuberta, hasta que finalmente en Marzo de 1987 se instaló en su actual ubicación en la
                    calle Maestra Cueto 750, a escasos pasos de la estación de Morón.
                </p>
                <p>
                    En el año 1994 el parlamento provincial aprobó la ley 11.610 por la que el partido de Morón, se dividiría en tres: Morón, Ituzaingó y
                    Hurlingham. Como parte de esa transición la escuela pasó a llamarse Escuela N°2 "Manuel Belgrano".{' '}
                </p>
                <p> En 2007 la escuela pasa a llamarse Centro Municipal de Formación Profesional N° 2 "Manuel Belgrano" nombre con el que hoy continua. </p>
                <p>
                    Los primeros cursos dictados fueron: Secretariado Comercial, Dibujo Publicitario, Cerámica, Cocina, Cosmetología, Mecánica Dental,
                    Instalador Gasista, Instalador Plomero, Instalador Electricista y Reparador de máquinas de escribir. Desde sus orígenes a esta parte, los
                    cursos dictados se han actualizado de modo continuo, tratando de dar respuesta a las demandas laborales y a las necesidades del vecino
                    acorde a cada momento.
                </p>
            </Section>
            <Section>
                <h2>Integrantes</h2>
                <div className='item'>
                    <b>Director</b>
                    <p>Cosme Fulanito</p>
                </div>
                <div className='item'>
                    <b>Vicedirector</b>
                    <p>Cosme Fulanito</p>
                </div>
                <div className='item'>
                    <b>Profesores</b>
                    <ul>
                        <li>Cosme Fulanito</li>
                        <li>Pirulo</li>
                    </ul>
                </div>
            </Section>
        </>
    );
};

export default Nosotros;
