import Main from '../components/Main';
import Section from '../components/Section';
import Campo from '../components/contacto/Campo';
import background from '../assets/background/contacto.jpg';
import Modal from '../components/contacto/Modal';
import Button from '../components/contacto/Button';
import { useForm } from 'react-hook-form';
import '../styles/pages/_contacto.scss';
import { useState } from 'react';

const Contacto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [modal, setModal] = useState(false);

    const onSubmit = (data) => {
        setModal(true);
    };

    return (
        <>
            <Main bgImage={background} />
            <Section>
                <h1>Contacto</h1>
                <p>
                    Podés contactarnos a través del siguiente formulario o por email enviando un mensaje a <b>cmfp@yahoo.com</b>. También podés llamar al{' '}
                    <b>(011) 4629 - 1781</b>.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Campo label='nombre' campo='Nombre' placeholder='Ingrese su nombre' register={register} />
                    <Campo label='apellido' campo='Apellido' placeholder='Ingrese su apellido' register={register} />
                    <Campo label='email' type='email' campo='Email' placeholder='usuario@correo.com' register={register} />
                    <Campo
                        label='telefono'
                        type='number'
                        campo='Teléfono'
                        placeholder='Ingrese su teléfono, sin guiones y con código de área. Ej 1144440000'
                        register={register}
                    />
                    <Campo label='asunto' campo='Asunto' placeholder='¿Por cuál motivo nos escribe?' register={register} />
                    <div className='campo'>
                        <label for='mensaje'>Mensaje:</label>
                        <textarea placeholder='Ingrese su mensaje' />
                    </div>
                    <Button content='Enviar' />
                    <button type='reset' className='button button-second reestablecer'>
                        Reestablecer
                    </button>
                </form>
            </Section>
            {modal ? <Modal /> : null}
        </>
    );
};

export default Contacto;
