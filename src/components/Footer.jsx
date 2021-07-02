import { useEffect, useState } from 'react';
import { scrollFade } from '../utils/scrollFade';
import Nav from './Nav';
import '../styles/components/_footer.scss';

const Footer = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const scrollMax = window.screen.height * 0.65;
        window.addEventListener('scroll', () => {
            setScroll(scrollFade(scrollMax));
        });
    }, []);

    return (
        <footer>
            <div className={`footer ${scroll ? 'mostrar' : ''}`}>
                <div className='datos'>
                    <p>Centro Municipal de Formación Profesional N°2</p>
                    <p>Manuel Belgrano</p>
                    <p>
                        Dirección:
                        <span> Maestra Cueto 750 - Morón</span>
                    </p>
                    <p>
                        Horario de atención:
                        <span> Lunes a viernes de 18 a 21 hs.</span>
                    </p>
                    <p>
                        Teléfono:
                        <span> (011) 4629 - 1781</span>
                    </p>
                    <p>
                        Email:
                        <span> cmfp2@yahoo.com</span>
                    </p>
                </div>
                <div className='nav-footer'>
                    <Nav footer={true} />
                </div>
                <div className='redes'>
                    <p>Seguinos en nuestras redes</p>
                    <p>
                        <i className='fab fa-facebook-square'></i> <i className='fab fa-instagram'></i>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
