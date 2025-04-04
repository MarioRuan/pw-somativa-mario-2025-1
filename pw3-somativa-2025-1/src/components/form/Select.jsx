import style from './select.module.css'

function Select({text, name, id, handlerChange,options}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value=''>Selecione uma categoria</option>
                {
                options.map((option=>(
                    <option value={option.cod_categoria} key={option.cod_categoria}>{option.nome_categoria}</option>)
                ))
                }
                <option value='1'>Ficção Legal</option>
            </select>
        </div>
    )
}

export default Select