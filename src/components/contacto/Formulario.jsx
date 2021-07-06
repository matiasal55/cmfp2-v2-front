import Campo from './Campo';
import Modal from './Modal';
import TextArea from './TextArea';
import Button from './Button';
import { useForm } from 'react-hook-form';
import '../../styles/pages/_contacto.scss';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateFormContacto } from '../../utils/validationSchema';

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validateFormContacto),
    });
    const [modal, setModal] = useState(false);

    const onSubmit = (data) => {
        setModal(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Campo label='nombre' campo='Nombre' placeholder='Ingrese su nombre' register={register} errors={errors} />
                <Campo label='apellido' campo='Apellido' placeholder='Ingrese su apellido' register={register} errors={errors} />
                <Campo label='email' type='email' campo='Email' placeholder='usuario@correo.com' register={register} errors={errors} />
                <Campo
                    label='telefono'
                    type='number'
                    campo='Teléfono'
                    placeholder='Ingrese su teléfono, sin guiones y con código de área. Ej 1144440000'
                    register={register}
                    errors={errors}
                />
                <Campo label='asunto' campo='Asunto' placeholder='¿Por cuál motivo nos escribe?' register={register} errors={errors} />
                <TextArea errors={errors} register={register} />
                <Button content='Enviar' />
                <button type='reset' className='button button-second reestablecer'>
                    Reestablecer
                </button>
            </form>
            {modal ? <Modal /> : null}
        </>
    );
};

export default Formulario;
