import Img01 from '../assets/01.png';
import Img02 from '../assets/02.png';
import Img03 from '../assets/03.png';
import Img04 from '../assets/04.png';

const Cards = () => {
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
        <>
            {cards.map((card) => (
                <div className='section1-card'>
                    <img src={card.img} alt='' />
                    <h4>{card.titulo}</h4>
                    <h4>{card.subtitulo}</h4>
                </div>
            ))}
        </>
    );
};

export default Cards;
