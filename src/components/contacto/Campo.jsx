import '../../styles/components/_campoForm.scss';

const Campo = (props) => {
    const { label, campo, type = 'text', placeholder, register, errors, required = true } = props;

    return (
        <div className='campo'>
            <label htmlFor={label}>{campo}:</label>
            <input id={label} type={type} placeholder={placeholder} {...register(label, { required })} />
            {errors[label] ? <div className='error'>{errors[label].message}</div> : null}
        </div>
    );
};

export default Campo;
