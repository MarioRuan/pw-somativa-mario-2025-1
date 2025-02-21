import style from './BookCard.module.css'
import Button from './Button'

const BookCard = ({titulo,autor,imagem}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt="Capa: As Carvenas de Aço"/>
            <Button label='DETALHE'/>
        </div>
    )
}

export default BookCard