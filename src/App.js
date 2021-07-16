import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Index from './pages/Index';
import Inscripcion from './pages/Inscripcion';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import CursosEspecialidades from './pages/cursos/CursosEspecialidades';
import TemplateCursos from './pages/cursos/Template';
import NotFound from './components/error/NotFound';
import Construccion from './components/Construccion';
import Noticias from './pages/Noticias';
import Noticia from './components/noticias/Noticia';

const App = () => {
    return (
        <BrowserRouter forceRefresh={true}>
            <ScrollToTop />
            <Layout>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/cursos-especialidades' component={CursosEspecialidades} />
                    <Route exact path='/cursos-especialidades/:curso'>
                        <TemplateCursos section='especialidades' />
                    </Route>
                    <Route exact path='/inscripcion' component={Inscripcion} />
                    <Route exact path='/inscripcion/sistema' component={Construccion} />
                    <Route exact path='/nosotros' component={Nosotros} />
                    <Route exact path='/contacto' component={Contacto} />
                    <Route exact path='/area-alumnos' component={Construccion} />
                    <Route exact path='/noticias' component={Noticias} />
                    <Route exact path='/noticias/:noticia' component={Noticia} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
