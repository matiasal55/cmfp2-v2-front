import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
    const { path, color = 'first', content } = props;

    return (
        <Link to={path}>
            <div className={`button button-${color}`}>{content}</div>
        </Link>
    );
};

export default ButtonLink;
