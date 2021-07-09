import '../../styles/noticias/_card.scss';

const Card = ({ noticia }) => {
    const fecha = new Date();

    return (
        <div className='noticia'>
            <div className='noticia-img' style={{ background: `url(${noticia.mainImage})` }} />
            <div className='detalles'>
                <h2>{noticia.title}</h2>
                <h3>{noticia.subtitle}</h3>
                <small>Publicado el {fecha.toLocaleDateString()}</small>
            </div>
        </div>
    );
};

export default Card;
