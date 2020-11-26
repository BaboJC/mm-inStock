function WarehouseFormInput(props) {
  return (
    <div className="warehouse-form__container">
      <label className="warehouse-form__label" htmlFor={props.inputName}>
        {props.inputValue}
      </label>
      <input
        className="warehouse-form__input"
        name={props.inputName}
        placeholder={props.inputValue}
      />
    </div>
  )
}

export default WarehouseFormInput
