import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' component={Index} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
