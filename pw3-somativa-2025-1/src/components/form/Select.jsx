import style from './select.module.css'

function Select({text, name, id}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={id}>
                <option value=''>Selecione uma categoria</option>
                <option value=''>Ficção cientifica</option>
                <option value=''>Fantasia heroica</option>
                <option value=''>Supense</option>
                <option value=''>Terror</option>
            </select>
        </div>
    )
}

export default Select