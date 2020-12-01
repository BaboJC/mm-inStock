function TextFormInput(props) {
  return (
    <div className="form__container">
      <label className="form__label" htmlFor={props.inputName}>
        <h3 className="form__h3">{props.inputValue}</h3>
      </label>
      <input
        // onChange={(event)=>{props.handleInputChange(event)}}
        className="form__input"
        name={props.inputName}
        placeholder={props.inputValue}
        defaultValue={props.fill}
      />
    </div>
  )
}

export default TextFormInput
