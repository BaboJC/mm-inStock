import React from "react"
import WarehouseDeleteButton from "./WarehouseDeleteButton"
// import ReactDom from 'react-dom'
// impor WarehouseDeleteButton from './W'

const MODAL_STYLES = {
        position:'fixed',
        width:'800px',
        height:'300px',
        top: '50%',
        left: '50%',
        transform:'translate(-50%, -50%)',
        backgroundColor:'white',
        padding:'50px',
        zIndex: 1000

}
 const MODAl_OVERLAY = {
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'#5c667e',
    opacity:'.7',
    zIndex:1000
    
 }
const MODAl_CLOSEBTN ={
    position:'absolute',
    left:'80%',
    top:'80%',
}

function WarehouseDeleteModal({open, children, onClose,deleteWarehouse, id}){
    if (!open)return null
    return (
    // ReactDom.createPortal(
        <>
        <div style={MODAl_OVERLAY}>
            <div style={MODAL_STYLES}>
                <button style={MODAl_CLOSEBTN} onClick={onClose}>Close Modal</button>
                <WarehouseDeleteButton deleteWarehouse={deleteWarehouse} id={id} />
                {children}
             </div>
        </div>
        </>

        // document.getElementById('portal')
    )
}

export default WarehouseDeleteModal;