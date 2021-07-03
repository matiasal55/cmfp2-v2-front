import { useEffect, useState } from 'react';
import Main from '../components/index/MainHome';
import Cards from '../components/index/Cards';
import NoticiasCalendario from '../components/index/NoticiasCalendario';
import { scrollFade } from '../utils/scrollFade';
import background from '../assets/background/home01.jpg';

const Index = () => {
    const [scroll, setScroll] = useState(false);
    const scrollMax = 250;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(scrollFade(scrollMax));
        });
    }, []);

    return (
        <>
            <Main bgImage={background} />
            <Cards scroll={scroll} />
            <NoticiasCalendario scroll={scroll} />
        </>
    );
};

export default Index;
