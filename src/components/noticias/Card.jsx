import { Link } from 'react-router-dom';
import '../../styles/noticias/_card.scss';
import { createLink } from '../../utils/adminTitles';

const Card = ({ noticia }) => {
    const fecha = new Date(noticia.date);
    const link = createLink('/noticias', noticia.id, noticia.title);

    return (
        <Link to={link}>
            <div className='noticia'>
                <div className='noticia-img' style={{ background: `url(${noticia.mainImage})` }} />
                <div className='detalles'>
                    <h2>{noticia.title}</h2>
                    <h3>{noticia.subtitle}</h3>
                    <small>Publicado el {noticia.date ? fecha.toLocaleDateString() : ''}</small>
                </div>
            </div>
        </Link>
    );
};

export default Card;
