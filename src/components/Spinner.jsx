import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/components/_spinner.scss';

const Spinner = () => {
    return (
        <div className='spinner'>
            <Loader type='Puff' color='#d41a1c' />
        </div>
    );
};

export default Spinner;
