import { Children, cloneElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/_mixins.scss';

const Layout = (props) => {
    return (
        <>
            <Header />
            {Children.map(props.children, (child) => cloneElement(child, { scroll: true }))}
            <Footer />
        </>
    );
};

export default Layout;
