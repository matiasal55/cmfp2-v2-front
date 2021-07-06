import { Link, useRouteMatch } from 'react-router-dom';
import '../../styles/cursos/_card.scss';

const Card = ({ curso }) => {
    const { path } = useRouteMatch();

    return (
        <div className='cursos-card'>
            <Link to={`${path}/${curso.id}-${curso.titulo.toLowerCase().replace(/ /g, '-')}`}>
                <img src={curso.imgMain} className='imgCurso' alt={curso.titulo} />
                <div>{curso.titulo}</div>
            </Link>
        </div>
    );
};

export default Card;
