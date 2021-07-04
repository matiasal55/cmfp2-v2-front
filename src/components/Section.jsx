import { useEffect, useState } from 'react';
import { scrollFade } from '../utils/scrollFade';
import '../styles/components/_section.scss';

const Section = (props) => {
    const [scroll, setScroll] = useState(false);
    const scrollMax = 250;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(scrollFade(scrollMax));
        });
    }, []);

    return <section className={`section ${scroll ? 'mostrar' : ''}`}>{props.children}</section>;
};

export default Section;
