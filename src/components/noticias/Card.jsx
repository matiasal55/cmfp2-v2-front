import { Link } from 'react-router-dom';
import '../../styles/noticias/_card.scss';

const Card = ({ noticia }) => {
    const fecha = new Date();

    return (
        <Link to={`/noticias/${noticia.id}-${noticia.title.replace(/ /g, '-')}`}>
            <div className='noticia'>
                <div className='noticia-img' style={{ background: `url(${noticia.mainImage})` }} />
                <div className='detalles'>
                    <h2>{noticia.title}</h2>
                    <h3>{noticia.subtitle}</h3>
                    <small>Publicado el {fecha.toLocaleDateString()}</small>
                </div>
            </div>
        </Link>
    );
};

export default Card;
