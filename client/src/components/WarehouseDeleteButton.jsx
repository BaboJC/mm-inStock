function WarehouseDeleteButton (props){
    return(
        <div>
                <button className="warehouse-item__icon" 
                onClick={()=>{props.deleteWarehouse(props.id)}}>
                DELETE COMPONENT
                 </button> 
        </div>
    );
}
export default WarehouseDeleteButton;

// ((F)=>{})