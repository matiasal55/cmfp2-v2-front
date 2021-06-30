import Header from './Header';
import Footer from './Footer';
import '../styles/_mixins.scss';

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
