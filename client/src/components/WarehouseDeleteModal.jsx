import React from "react"
import WarehouseDeleteButton from "./WarehouseDeleteButton"


const MODAL_STYLES = {
    position:'fixed',
    width:'800px',
    height:'300px',
    top: '50%',
    left: '50%',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#f7f8f9',
    padding:'50px',
    opacity:'',
    zIndex: 1000,
}
const MODAl_OVERLAY = {
position:'fixed',
top:0,
left:0,
right:0,
bottom:0,
backgroundColor:'#5c667e',
opacity:'.9',
zIndex:1000

}
const MODAl_CLOSEBTN ={
position:'absolute',
left:'80%',
top:'80%',
borderRadius:'1.25rem',
backgroundColor:'#158463',
}
function WarehouseDeleteModal({open, children, onClose,deleteWarehouse, id}){
    if (!open)return null
    return (
    // ReactDom.createPortal(
        <>
        <div style={MODAl_OVERLAY}>
            <div className="modal__display" style={MODAL_STYLES}>
                <button style={MODAl_CLOSEBTN} onClick={onClose}>Cancel</button>
                <WarehouseDeleteButton onClick={onClose} deleteWarehouse={deleteWarehouse} id={id} />
                {children}
             </div>
        </div>
        </>

        // document.getElementById('portal')
    )
}

export default WarehouseDeleteModal;