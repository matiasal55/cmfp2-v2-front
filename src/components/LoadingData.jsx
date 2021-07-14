import Spinner from './Spinner';

const LoadingData = ({ loading, condition, children, message }) => {
    return <>{loading ? <Spinner /> : condition ? <>{children}</> : <h3>{message}</h3>}</>;
};

export default LoadingData;
