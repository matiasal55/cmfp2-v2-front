import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { footer, menu } = props;
    const [cursos, setCursos] = useState(false);
    // const cursos = document.getElementsByClassName('cursos')[0];

    const mostrar = () => {
        setCursos(!cursos);
    };

    return (
        <nav className={`menu ${menu ? 'responsive' : ''}`}>
            <div className='nav-items'>
                <Link to='/'>Inicio</Link>
            </div>
            {!footer ? (
                <div className='nav-items cursos-titulo' onClick={mostrar}>
                    Cursos <i class='fas fa-chevron-down' id='cursos'></i>
                    <div className={`cursos ${cursos ? 'responsive' : ''}`}>
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
        </nav>
    );
};

export default Nav;
