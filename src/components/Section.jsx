import { useEffect, useState } from 'react';
import '../styles/components/_section.scss';

const Section = (props) => {
    const [view, setView] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setView(true);
        }, 500);
    }, []);

    return <section className={`section ${view ? 'mostrar' : ''}`}>{props.children}</section>;
};

export default Section;
