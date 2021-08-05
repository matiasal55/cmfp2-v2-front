import { Link, useRouteMatch } from 'react-router-dom';
import '../../styles/cursos/_card.scss';
import { createLink } from '../../utils/adminTitles';

const Card = ({ curso }) => {
    const { path } = useRouteMatch();
    const link = createLink(path, curso.id, curso.titulo);

    return (
        <div className='cursos-card'>
            <Link to={link}>
                <div className='imgCurso' style={{ backgroundImage: `url(${curso.thumbnail})` }} />
                <div className='titulo'>
                    <span>{curso.titulo}</span>
                </div>
            </Link>
        </div>
    );
};

export default Card;
