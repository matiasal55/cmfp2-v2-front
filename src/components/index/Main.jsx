import { Link } from 'react-router-dom';
import '../../styles/index/_main.scss';

const Main = () => {
    return (
        <main>
            <div className='main'>
                <h1>Centro Municipal de Formación Profesional N°2</h1>
                <h2>Manuel Belgrano</h2>
                <h3>Capacitate con los mejores cursos de alta calidad</h3>
                <div className='call-action'>
                    <Link to='/cursos-especialidades'>
                        <div className='button button-first'>Ver cursos</div>
                    </Link>
                    <Link to='/inscripcion'>
                        <div className='button button-second'>Informes de Inscripción</div>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Main;
