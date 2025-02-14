import './App.css'
import BookCard from './components/BookCard'
import capa_livro from './assets/cavernas_aco.jpg'

function App() {
  

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        
        <BookCard 
          titulo='As Carvenas de Aço' 
          autor='Isaac Azimov'
          imagem={capa_livro}/>

        {/* <BookCard 
          titulo='O sol Desvelado' 
          autor='Isaac Azimov'
          imagem='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo='O Fim da Infancia' 
          autor='Arthur C. Clack'
          imagem='Uma imagem vai aparecer aqui'/>

        <BookCard 
          titulo='Neuromancer' 
          autor='Willian Gibson'
          imagem='Uma imagem vai aparecer aqui'/> */}
      </div>
    </>
  )
}

export default App
