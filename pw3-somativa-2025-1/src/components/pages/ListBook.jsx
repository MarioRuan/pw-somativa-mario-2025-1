import React from "react";
import style from './ListBook.module.css'
import { useState, useEffect } from "react";
import imagem from "../../assets/cavernas_aco.jpg"
import BookCard from "../BookCard";
import cavernas from '../../assets/berserk.jpeg'
import ContainerBook from "../layout/ContainerBook";

const ListBook = () =>{
    const [books, setbooks] = useState([]);

    useEffect(()=> {
        fetch('http://127.0.0.1:5000/listagemlivros',{
            method:'GET',
            cors:'cors',
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                'Acess-Control-Allow-Headers':'*'
            }
        })
        .then((resp)=>resp.json())
        .then((bookdata)=>{
            console.log(bookdata.data);
            setbooks(bookdata.data);
        })
        .catch((err)=>{
            console.log(err)
        });
    },[])
    return(
        <section>
            <h1>LIST BOOK</h1>

            <ContainerBook>
                {books.map((book)=>(
                    <BookCard
                    nome_livro = {book.nome_livro}
                    autor_livro = {book.autor_livro}
                    imagem = {cavernas}
                    key = {book.cod_livro}/>
                ))}
            </ContainerBook>
            
        </section>
    )
}

export default ListBook