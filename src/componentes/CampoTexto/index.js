import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;



  // todo evento JS vai ter uma Target e pode ter um Value
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
