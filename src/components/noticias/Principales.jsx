import { useEffect, useState } from 'react';
import LoadingData from '../LoadingData';
import { getUltimasNoticias } from './getNoticias';
import Card from './Card';
import { Link } from 'react-router-dom';

const Principales = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('No hay noticias por el momento');

    const ultimasNoticias = async () => {
        const lista = await getUltimasNoticias();
        setLoading(false);
        if (lista.message) setNoticias([]);
        else if (!lista) {
            setNoticias([]);
            setErrorMsg('Hubo un problema interno. Intente más tarde. Disculpe las molestias');
        } else {
            setNoticias(lista);
        }
    };

    useEffect(() => {
        ultimasNoticias();
    }, []);

    return (
        <div className='noticias-index'>
            <Link to='/noticias'>
                <h2>Noticias</h2>
            </Link>
            <LoadingData loading={loading} condition={noticias && noticias.length > 0} message={errorMsg}>
                {noticias ? noticias.map((noticia) => <Card noticia={noticia} />) : null}
            </LoadingData>
        </div>
    );
};

export default Principales;
