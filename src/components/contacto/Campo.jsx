import '../../styles/components/_campoForm.scss';

const Campo = (props) => {
    const { label, campo, type = 'text', placeholder, register } = props;

    return (
        <div className='campo'>
            <label for={label}>{campo}:</label>
            <input id={label} name={label} type={type} placeholder={placeholder} {...register(label)} />
        </div>
    );
};

export default Campo;
