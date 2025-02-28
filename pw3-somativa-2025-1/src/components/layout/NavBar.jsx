import style from './NavBar.module.css'
import { Link, Outlet } from 'react-router-dom'


const NavBar = () =>{
    return(
        <>
        <nav className={style.navbar}>
            <ul className={style.list}>
                <Link to='/'>
                <li className={style.item}><img src='./book.jpeg' alt="logotipo" className={style.logo}/></li>
                </Link>

                <Link to='/'>
                <li className={style.item}><a href="">HOME</a></li>
                </Link>

                <Link to='/newBook'>
                <li className={style.item}><a href="">CADASTRAR LIVROS</a></li>
                </Link>

                <Link to='/listBook'>
                <li className={style.item}><a href="">LISTAR LIVROS</a></li>
                </Link>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

export default NavBar