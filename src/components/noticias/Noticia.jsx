import { useParams } from 'react-router-dom';
import noticias from './noticias.json';
import Main from '../Main';
import Section from '../Section';

const Noticia = () => {
    const { noticia } = useParams();
    const id = parseInt(noticia.substring(0, noticia.indexOf('-')));
    let data = noticias.filter((noticia) => noticia.id === id);
    data = data[0];

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
