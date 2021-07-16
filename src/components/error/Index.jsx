import Internal from './Internal';
import NotFound from './NotFound';

const Index = ({ error }) => {
    if (error === 400) return <NotFound />;
    return <Internal />;
};

export default Index;
