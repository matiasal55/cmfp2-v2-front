import Card from './Card';
import '../../styles/cursos/_page.scss';

const Lista = ({ cursos }) => {
    return (
        <div className='cursos-cards'>
            {cursos.map((curso) => (
                <Card curso={curso} />
            ))}
        </div>
    );
};

export default Lista;
