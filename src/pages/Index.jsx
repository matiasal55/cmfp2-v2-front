import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import '../styles/index.scss';
import { scrollFade } from '../utils/scrollFade';

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
            <main>
                <div className='main'>
                    <h1>Centro Municipal de Formación Profesional N°2</h1>
                    <h2>Manuel Belgrano</h2>
                    <h3>Capacitate con los mejores cursos de alta calidad</h3>
                    <div className='call-action'>
                        <Link to='/cursos-especialidades'>
                            <div className='button button-first'>Ver cursos</div>
                        </Link>
                        <Link to='/inscripcion'>
                            <div className='button button-second'>Informes de Inscripción</div>
                        </Link>
                    </div>
                </div>
            </main>
            <section className={`section1 ${scroll ? 'mostrar' : ''}`}>
                <h1>¿Por qué cursar?</h1>
                <div className='section1-cards'>
                    <Cards />
                </div>
            </section>

            <section className={`section2 ${scroll ? 'mostrar' : ''}`}>
                <div className='noticias-calendario'>
                    <div className='noticias'>
                        <h2>Noticias</h2>
                        <div className='noticia'>
                            <h3>Título #1</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut officia aliquam id, libero temporibus expedita ex laboriosam
                                neque laborum perspiciatis eaque qui impedit nesciunt voluptatum provident veniam magni harum?
                            </p>
                        </div>
                        <div className='noticia'>
                            <h3>Título #1</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut officia aliquam id, libero temporibus expedita ex laboriosam
                                neque laborum perspiciatis eaque qui impedit nesciunt voluptatum provident veniam magni harum?
                            </p>
                        </div>
                        <div className='noticia'>
                            <h3>Título #1</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut officia aliquam id, libero temporibus expedita ex laboriosam
                                neque laborum perspiciatis eaque qui impedit nesciunt voluptatum provident veniam magni harum?
                            </p>
                        </div>
                    </div>
                    <div className='calendario'>
                        <h3>Próxima fecha de inscripción</h3>
                        <div className='fecha'>
                            <p className='numero'>01</p>
                            <p className='mes'>Lorem</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
