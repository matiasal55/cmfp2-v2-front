import '../../styles/components/_button.scss';

const Button = (props) => {
    const { type = 'submit', color = 'first', content } = props;

    return (
        <button type={type} className={`button button-${color}`}>
            {content}
        </button>
    );
};

export default Button;
