import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingData from '../LoadingData';
import { getUltimasNoticias } from './getNoticias';

const Principales = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('No hay noticias por el momento');

    const ultimasNoticias = async () => {
        const lista = await getUltimasNoticias();
        setLoading(false);
        setNoticias(lista);
    };

    useEffect(() => {
        ultimasNoticias();
    }, []);

    if (!noticias) {
        setNoticias([]);
        setErrorMsg('Hubo un problema interno. Intente más tarde. Disculpe las molestias');
    }

    return (
        <>
            <LoadingData loading={loading} condition={noticias && noticias.length > 0} message={errorMsg}>
                {noticias
                    ? noticias.map((noticia) => (
                          <Link to={`/noticias/${noticia.id}-${noticia.title.replace(/ /g, '-')}`}>
                              <div key={noticia.id} className='noticia-index'>
                                  <h3>{noticia.title}</h3>
                                  <p>{noticia.subtitle}</p>
                              </div>
                          </Link>
                      ))
                    : null}
            </LoadingData>
        </>
    );
};

export default Principales;
