import { useParams } from 'react-router-dom';
import Main from '../Main';
import Section from '../Section';
import { getNoticia } from './getNoticias';
import { useEffect, useState } from 'react';
import Error from '../error/Index';
import { compararTitulos, getId } from '../../utils/adminTitles';

const Noticia = () => {
    const { noticia } = useParams();
    const [data, setData] = useState({});
    const id = getId(noticia);

    const obtenerNoticia = async (id) => {
        const noticia = await getNoticia(id);
        setData(noticia);
    };

    useEffect(() => {
        obtenerNoticia(id);
    }, [id]);

    if (data.message || (data.title && !compararTitulos(noticia, data.title))) return <Error error={400} />;
    if (!data) return <Error />;

    return (
        <>
            <Main bgImage={data.mainImage} />
            <Section>
                <h1>{data.title}</h1>
                <h3>{data.subtitle}</h3>
                <p>
                    <i>Publicado el {noticia.date ? noticia.date.toLocaleDateString() : ''}</i>
                </p>
                <p>{data.content}</p>
            </Section>
        </>
    );
};

export default Noticia;
