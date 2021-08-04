import Main from '../components/Main';
import Section from '../components/Section';
import Card from '../components/noticias/Card';
import background from '../assets/background/noticias.jpg';
import { getTodasNoticias } from '../components/noticias/getNoticias';
import { useEffect, useState } from 'react';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    const listaNoticias = async () => {
        const lista = await getTodasNoticias();
        setNoticias(lista);
    };

    useEffect(() => {
        listaNoticias();
    }, []);

    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Noticias</h1>
                {noticias && noticias.length > 0 ? (
                    noticias.map((noticia, index) => <Card key={index} noticia={noticia} />)
                ) : (
                    <h3>No hay noticias por el momento</h3>
                )}
            </Section>
        </>
    );
};

export default Noticias;
