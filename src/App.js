import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Nosotros from './pages/Nosotros';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/nosotros' component={Nosotros} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
