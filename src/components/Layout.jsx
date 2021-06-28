import Header from './Header';
import Footer from './Footer';
import '../styles/_mixins.scss';

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
