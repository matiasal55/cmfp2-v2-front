import Main from '../components/Main';
import Section from '../components/Section';
import Card from '../components/noticias/Card';
import background from '../assets/background/noticias.jpg';
import { getTodasNoticias } from '../components/noticias/getNoticias';
import { useEffect, useState } from 'react';
import LoadingData from '../components/LoadingData';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('No hay noticias por el momento');

    const listaNoticias = async () => {
        const lista = await getTodasNoticias();
        setNoticias(lista);
        setLoading(false);
    };

    useEffect(() => {
        listaNoticias();
    }, []);

    if (!noticias) {
        setNoticias([]);
        setErrorMsg('Hubo un problema interno. Intente más tarde. Disculpe las molestias');
    }

    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Noticias</h1>
                <LoadingData loading={loading} condition={noticias && noticias.length > 0} message={errorMsg}>
                    {noticias ? noticias.map((noticia, index) => <Card key={index} noticia={noticia} />) : null}
                </LoadingData>
            </Section>
        </>
    );
};

export default Noticias;
