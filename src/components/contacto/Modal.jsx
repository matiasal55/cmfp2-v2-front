import ButtonLink from '../ButtonLink';
import '../../styles/components/_modal.scss';

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <h2>Muchas gracias por el mensaje. Será respondido a la brevedad</h2>
                <ButtonLink path='/' content='Volver a Inicio' />
            </div>
        </div>
    );
};

export default Modal;
