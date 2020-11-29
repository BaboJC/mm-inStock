function WarehouseDeleteButton (props) {
    return(
        <div>
            <button>
                {<img className="warehouse-item__icon"  onClick={()=>{props.deleteWarehouse(props.id)}} alt="delete button" />}
            </button>
       </div>
    )

}
export default WarehouseDeleteButton;