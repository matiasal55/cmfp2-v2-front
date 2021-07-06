import { useState } from 'react';
import '../../styles/components/_textarea.scss';

const TextArea = ({ errors, register }) => {
    const [msgLength, setMsgLength] = useState(0);
    const msgLengthMax = 500;

    const handleChangeMsg = (event) => {
        const length = event.target.textLength;
        if (length <= msgLengthMax) setMsgLength(length);
    };

    const handlePressKey = (event) => {
        if (msgLength >= msgLengthMax) event.preventDefault();
    };

    return (
        <div className='campo'>
            <label htmlFor='mensaje'>Mensaje:</label>
            <textarea
                id='mensaje'
                placeholder='Ingrese su mensaje'
                {...register('mensaje', { required: true })}
                onChange={handleChangeMsg}
                onKeyPress={handlePressKey}
            />
            <div className={msgLength > msgLengthMax - 10 ? 'error' : null}>
                {msgLength} / {msgLengthMax} caracteres
            </div>
            {errors.mensaje ? <div className='error'>{errors.mensaje.message}</div> : null}
        </div>
    );
};

export default TextArea;
