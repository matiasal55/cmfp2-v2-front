import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.jpg';
import { useEffect, useState } from 'react';

const ver_menu = document.getElementsByClassName('menu')[0];
const ver_cursos = document.getElementsByClassName('cursos')[0];
const header = document.getElementsByClassName('header')[0];
const scrollMaxMenu = 300;
const footer = document.getElementsByClassName('footer')[0];
const scrollFooter = window.screen.height * 0.65;

// Fade a medida que scrollea, solo index
const scrollSection = (section, scroll) => {
    if (window.pageYOffset >= scroll) section.classList.add('mostrar');
    else section.classList.remove('mostrar');
};

// Efecto menú fondo oscuro, letras blancas
const scrollMenu = () => {
    if (window.pageYOffset >= scrollMaxMenu) {
        header.classList.add('scroll');
        ver_menu.classList.add('scroll');
        ver_cursos.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        ver_cursos.classList.remove('scroll');
    }

    // Incluye fade Footer
};

// Fadein de contenidos, excepto index
const contenidos = (section, tiempo) => {
    setTimeout(() => {
        section.classList.add('mostrar');
    }, tiempo);
};

const fadeFooter = () => {
    scrollSection(footer, scrollFooter);
};

const scrollSection1 = 250;
const scrollSection2 = window.screen.height * 0.4;
const section1 = document.getElementsByClassName('section1')[0];
const section2 = document.getElementsByClassName('section2')[0];

window.onscroll = () => {
    // scrollMenu();
    // scrollSection(section1, scrollSection1);
    // scrollSection(section2, scrollSection2);
    // fadeFooter();
};

// const menuResponsive = () => {
//     const boton = document.getElementById('boton-responsive');
//     const ver_menu = document.getElementsByClassName('menu')[0];
//     const boton_cursos = document.getElementsByClassName('cursos-titulo')[0];
//     const ver_cursos = document.getElementsByClassName('cursos')[0];
//     const header = document.getElementsByClassName('header')[0];

//     const mostrar = (elemento, mostrar, clase) => {
//         elemento.addEventListener('click', () => {
//             if (mostrar.classList.contains(clase)) mostrar.classList.remove(clase);
//             else mostrar.classList.add(clase);
//             // mostrar.classList.toogle(clase);
//         });
//     };

//     mostrar(boton, ver_menu, 'responsive');
//     mostrar(boton_cursos, ver_cursos, 'responsive');
//     mostrar(boton_cursos, header, 'expandido');
// };

// menuResponsive();

const Header = () => {
    const [menu, setMenu] = useState(true);
    // const menu = document.getElementsByClassName('menu')[0];

    const mostrar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        if (window.innerWidth <= 768) setMenu(false);
    }, []);

    return (
        <div className='header'>
            <header>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div onClick={mostrar}>
                    <i class='fas fa-bars boton-responsive' id='boton-responsive'></i>
                </div>
            </header>
            <Nav footer={false} menu={menu} />
        </div>
    );
};

export default Header;
