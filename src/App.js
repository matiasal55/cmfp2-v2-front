import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Index from './pages/Index';
import Inscripcion from './pages/Inscripcion';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/inscripcion' component={Inscripcion} />
                    <Route exact path='/nosotros' component={Nosotros} />
                    <Route exact path='/contacto' component={Contacto} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
