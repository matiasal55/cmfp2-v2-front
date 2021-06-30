import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.jpg';
import { useEffect, useState } from 'react';
import { scrollFade } from '../utils/scrollFade';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [expandido, setExpandido] = useState(false);
    const scrollMaxMenu = 300;

    const mostrar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        if (window.innerWidth <= 768) setMenu(false);
        window.addEventListener('scroll', () => {
            setScroll(scrollFade(scrollMaxMenu));
        });
    }, []);

    return (
        <div className={`header ${scroll ? `scroll ${expandido ? 'expandido' : ''}` : ''}`}>
            <header>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div onClick={mostrar}>
                    <i className='fas fa-bars boton-responsive' id='boton-responsive'></i>
                </div>
            </header>
            <Nav footer={false} menu={menu} scroll={setExpandido} />
        </div>
    );
};

export default Header;
