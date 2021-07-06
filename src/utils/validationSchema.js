import * as yup from 'yup';

const validateText = (msjError, min = 3, max = 20) => {
    const matches = /^[A-Za-z ]+$/;
    return yup
        .string()
        .trim()
        .required(msjError)
        .min(min, `El campo debe tener más de ${min} caracteres`)
        .max(max, `El campo debe tener menos de ${max} caracteres`)
        .matches(matches, 'Formato de texto inválido');
};

const validateEmail = () => yup.string().trim().email('El formato de email no es válido').required('Ingrese un email');

const validateTel = () =>
    yup
        .string()
        .trim()
        .required('Por favor ingrese un número de teléfono')
        .min(10, 'Ingrese un teléfono correcto. No olvide el código de área')
        .max(15, 'La cantidad de dígitos es mayor a la permitida');

const validateMsg = () =>
    yup
        .string()
        .required('Por favor ingrese el mensaje por el cual nos escribe')
        .min(10, `El mensaje debe contener más de 10 caracteres`)
        .max(500, `El mensaje debe contener menos de 500 caracteres`);

export const validateFormContacto = yup.object().shape({
    nombre: validateText('Ingrese un nombre válido'),
    apellido: validateText('Ingrese un apellido válido'),
    email: validateEmail(),
    telefono: validateTel(),
    asunto: validateText('Por favor ingrese un asunto por el cual nos escribe'),
    mensaje: validateMsg(),
});
