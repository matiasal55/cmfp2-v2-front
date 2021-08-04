import { Link, useRouteMatch } from 'react-router-dom';
import '../../styles/cursos/_card.scss';

const Card = ({ curso }) => {
    const { path } = useRouteMatch();

    return (
        <div className='cursos-card'>
            <Link to={`${path}/${curso.id}-${curso.titulo.toLowerCase().replace(/ /g, '-')}`}>
                <div className='imgCurso' style={{ backgroundImage: `url(${curso.thumbnail})` }} />
                <div className='titulo'>
                    <span>{curso.titulo}</span>
                </div>
            </Link>
        </div>
    );
};

export default Card;
