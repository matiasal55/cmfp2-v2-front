import Img01 from '../../assets/cards/01.png';
import Img02 from '../../assets/cards/02.png';
import Img03 from '../../assets/cards/03.png';
import Img04 from '../../assets/cards/04.png';
import '../../styles/index/_cards.scss';

const Cards = (props) => {
    const { scroll } = props;

    const card_1 = {
        img: Img01,
        titulo: 'Duración de los cursos',
        subtitulo: 'Cuatrimestrales y anuales',
    };

    const card_2 = {
        img: Img02,
        titulo: 'Rápida salida laboral',
        subtitulo: 'Ya podés trabajar de lo que aprendiste',
    };

    const card_3 = {
        img: Img03,
        titulo: 'Cursos certificados',
        subtitulo: 'Por la municipalidad de Morón y Provincia',
    };

    const card_4 = {
        img: Img04,
        titulo: 'Cursos no arancelados',
        subtitulo: 'Se puede colaborar con Cooperadora',
    };

    const cards = [card_1, card_2, card_3, card_4];

    return (
        <section className={`section ${scroll ? 'mostrar' : ''}`}>
            <h1>¿Por qué cursar?</h1>
            <div className='section1-cards'>
                {cards.map((card, index) => (
                    <div key={index} className='section1-card'>
                        <img src={card.img} alt='' />
                        <h4>{card.titulo}</h4>
                        <h4>{card.subtitulo}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
