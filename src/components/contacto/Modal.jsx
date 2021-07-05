import { Link } from 'react-router-dom';
import '../../styles/components/_modal.scss';

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>Muchas gracias por el mensaje. Será respondido a la brevedad</h2>
                <Link to='/'>
                    <div className='button button-first'>Volver a Inicio</div>
                </Link>
            </div>
        </div>
    );
};

export default Modal;
