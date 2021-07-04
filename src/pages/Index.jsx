import Main from '../components/index/MainHome';
import Cards from '../components/index/Cards';
import NoticiasCalendario from '../components/index/NoticiasCalendario';
import background from '../assets/background/home01.jpg';

const Index = () => {
    return (
        <>
            <Main bgImage={background} />
            <Cards />
            <NoticiasCalendario />
        </>
    );
};

export default Index;
