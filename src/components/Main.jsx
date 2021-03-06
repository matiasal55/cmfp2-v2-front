import '../styles/components/_main.scss';

const Main = (props) => {
    const { bgImage } = props;

    return (
        <main>
            <div className='main' style={{ backgroundImage: `url(${bgImage})` }}></div>
            {props.children}
        </main>
    );
};

export default Main;
