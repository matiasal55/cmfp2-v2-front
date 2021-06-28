import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import '../styles/index.scss';

const Index = () => {
    return (
        <>
            <main>
                <div className='main'>
                    <h1>Centro Municipal de Formación Profesional N°2</h1>
                    <h2>Manuel Belgrano</h2>
                    <h3>Capacitate con los mejores cursos de alta calidad</h3>
                    <div className='call-action'>
                        <div className='button button-first'>
                            <Link to='/cursos-especialidades'>Ver cursos</Link>
                        </div>
                        <div className='button button-second'>
                            <Link to='/inscripcion'>Informes de Inscripción</Link>
                        </div>
                    </div>
                </div>
            </main>
            <section className='section1'>
                <h1>¿Por qué cursar?</h1>
                <div className='section1-cards'>
                    <Cards />
                </div>
            </section>

            <section className='section2'>
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
