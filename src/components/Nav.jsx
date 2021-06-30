import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { footer, menu, scroll } = props;
    const [cursos, setCursos] = useState(false);

    const mostrar = () => {
        setCursos(!cursos);
        scroll(!cursos);
    };

    return (
        <nav className={`menu ${menu ? 'responsive' : ''}`}>
            <div className='nav-items'>
                <Link to='/'>Inicio</Link>
            </div>
            {!footer ? (
                <div className='nav-items cursos-titulo' onClick={mostrar}>
                    Cursos <i className='fas fa-chevron-down' id='cursos'></i>
                    <div className={`cursos ${cursos ? 'mostrar' : ''}`}>
                        <div className='cursos-items'>
                            <Link to='/cursos-especialidades'>Cursos Especialidades</Link>
                        </div>
                        <div className='cursos-items'>
                            <Link to='/cursos-taller'>Cursos Taller</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='nav-items'>
                        <Link to='/noticias'>Noticias</Link>
                    </div>
                    <div className='nav-items'>
                        <Link to='/cursos-especialidades'>Cursos Especialidades</Link>
                    </div>
                    <div className='nav-items'>
                        <Link to='/cursos-taller'>Cursos Taller</Link>
                    </div>
                </>
            )}
            <div className='nav-items'>
                <Link to='/inscripcion'>Inscripción</Link>
            </div>
            <div className='nav-items'>
                <Link to='/nosotros'>Nosotros</Link>
            </div>
            <div className='nav-items'>
                <Link to='/contacto'>Contacto</Link>
            </div>
            {!footer ? (
                <div className='nav-items'>
                    <Link to='/inscripcion'>
                        <div className='button button-first'>Area de Alumnos</div>
                    </Link>
                </div>
            ) : null}
        </nav>
    );
};

export default Nav;
