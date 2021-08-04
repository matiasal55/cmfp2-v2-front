import { useParams } from 'react-router-dom';
import Main from '../Main';
import Section from '../Section';
import { getNoticia } from './getNoticias';
import { useEffect, useState } from 'react';
import Internal from '../error/Internal';
import NotFound from '../error/NotFound';

const Noticia = () => {
    const { noticia } = useParams();
    const [data, setData] = useState({});
    const id = parseInt(noticia.substring(0, noticia.indexOf('-')));

    const obtenerNoticia = async (id) => {
        const noticia = await getNoticia(id);
        setData(noticia);
    };

    useEffect(() => {
        obtenerNoticia(id);
    }, [id]);

    if (data.message) return <NotFound />;
    if (!data) return <Internal />;

    return (
        <>
            <Main bgImage={data.mainImage} />
            <Section>
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
                <p>{data.content}</p>
            </Section>
        </>
    );
};

export default Noticia;
