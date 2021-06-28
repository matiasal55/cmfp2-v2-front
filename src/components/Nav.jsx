import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { footer } = props;

    return (
        <nav className='menu'>
            <div className='nav-items'>
                <Link to='/'>Inicio</Link>
            </div>
            {!footer ? (
                <div className='nav-items cursos-titulo'>
                    Cursos <i class='fas fa-chevron-down' id='cursos'></i>
                    <div className='cursos'>
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
