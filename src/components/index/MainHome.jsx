import ButtonLink from '../ButtonLink';
import Main from '../Main';
import '../../styles/index/_contentMain.scss';

const MainHome = (props) => {
    const { bgImage } = props;

    return (
        <Main bgImage={bgImage}>
            <div className='content'>
                <h1>Centro Municipal de Formación Profesional N°2</h1>
                <h2>Manuel Belgrano</h2>
                <h3>Capacitate con los mejores cursos de alta calidad</h3>
                <div className='call-action'>
                    <ButtonLink path='/cursos-especialidades' content='Ver cursos' />
                    <ButtonLink path='/inscripcion' color='second' content='Informes de Inscripción' />
                </div>
            </div>
        </Main>
    );
};

export default MainHome;
