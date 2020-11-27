function WarehouseFormInput(props) {
  return (
    <div className="warehouse-form__container">
      <label className="warehouse-form__label" htmlFor={props.inputName}>
        {props.inputValue}
        <input
          className="warehouse-form__input"
          name={props.inputName}
          placeholder={props.inputValue}
          value={props.fill}
        />
      </label>
    </div>
  )
}

export default WarehouseFormInput
