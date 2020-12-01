function WarehouseDeleteButton (props){
    return(
        <div>
                <button className="modal__delete" 
                onClick={()=>{props.deleteWarehouse(props.id)}}>
                Delete 
                 </button> 
        </div>
    );
}
export default WarehouseDeleteButton;

// ((F)=>{})