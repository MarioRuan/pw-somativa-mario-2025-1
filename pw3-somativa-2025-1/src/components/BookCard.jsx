import style from './BookCard.module.css'
import Button from './Button'

const BookCard = ({cod_livro,nome_livro,autor_livro,imagem}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{nome_livro}</h3>
            <p className={style.autor}>{autor_livro}</p>
            <img src={imagem} alt="Capa: As Carvenas de Aço"/>
            <Button  
            label='DETALHE'
            router = '/detailBook/'
            cod_livro={cod_livro}/>
        </div>
    )
}

export default BookCard