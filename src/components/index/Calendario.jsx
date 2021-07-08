import { Link } from 'react-router-dom';
import '../../styles/index/_calendario.scss';

const Calendario = () => {
    const abierta = false;

    return (
        <div className='calendario'>
            {abierta ? <h3 style={{ color: 'green' }}>Inscripción abierta hasta</h3> : <h3>Próxima fecha de inscripción</h3>}
            <div className='fecha'>
                <p className='numero'>01</p>
                <p className='mes'>Lorem</p>
            </div>
            <Link to='/inscripcion'>
                <h4>Más información</h4>
            </Link>
        </div>
    );
};

export default Calendario;
