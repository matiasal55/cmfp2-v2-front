import noticias from './noticias.json';

const Principales = () => {
    return (
        <>
            {noticias.slice(noticias.length - 3).map((noticia) => (
                <div key={noticia.id} className='noticia'>
                    <h3>{noticia.title}</h3>
                    <p>{noticia.subtitle}</p>
                </div>
            ))}
        </>
    );
};

export default Principales;
