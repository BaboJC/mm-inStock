function WarehouseFormInput(props) {
  return (
    <div className="warehouse-form__container">
      <label className="warehouse-form__label" htmlFor={props.input}>
        {props.input}
      </label>
      <input
        className="warehouse-form__input"
        name={props.input}
        placeholder={props.input}
      />
    </div>
  )
}

export default WarehouseFormInput
