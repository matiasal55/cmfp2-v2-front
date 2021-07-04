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
                    <div>
                        <b>Centro Municipal de Formación Profesional N°2</b>
                    </div>
                    <div>
                        <b>Manuel Belgrano</b>
                    </div>
                    <div>
                        <b>Dirección: </b>
                        Maestra Cueto 750 - Morón
                    </div>
                    <div>
                        <b>Horario de atención: </b>
                        Lunes a viernes de 18 a 21 hs.
                    </div>
                    <div>
                        <b>Teléfono: </b>
                        (011) 4629 - 1781
                    </div>
                    <div>
                        <b>Email: </b>
                        cmfp2@yahoo.com
                    </div>
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
