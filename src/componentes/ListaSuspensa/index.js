import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=''>Selecione um time</option>
                {/* para cada item retorna uma option, não passando parametros na função */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa