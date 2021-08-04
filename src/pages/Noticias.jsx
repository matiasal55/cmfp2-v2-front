import Main from '../components/Main';
import Section from '../components/Section';
// import noticias from '../components/noticias/noticias.json';
import Card from '../components/noticias/Card';
import background from '../assets/background/noticias.jpg';

const Noticias = () => {
    const noticias = [];

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
