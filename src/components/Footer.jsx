import Nav from './Nav';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='datos'>
                    <p>Centro Municipal de Formación Profesional N°2</p>
                    <p>Manuel Belgrano</p>
                    <p>
                        Dirección:
                        <span> Maestra Cueto 750 - Morón</span>
                    </p>
                    <p>
                        Horario de atención:
                        <span> Lunes a viernes de 18 a 21 hs.</span>
                    </p>
                    <p>
                        Teléfono:
                        <span> (011) 4629 - 1781</span>
                    </p>
                    <p>
                        Email:
                        <span> cmfp2@yahoo.com</span>
                    </p>
                </div>
                <div className='nav-footer'>
                    <Nav footer={true} />
                </div>
                <div className='redes'>
                    <p>Seguinos en nuestras redes</p>
                    <p>
                        <i class='fab fa-facebook-square'></i> <i class='fab fa-instagram'></i>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
