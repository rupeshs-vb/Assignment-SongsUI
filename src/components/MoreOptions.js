import React from 'react'
import './MoreOption.css'
const MoreOptions = () => {
    const DeleteElement=()=>{
        console.log("deleted");
    }
    return (
        <>
            <div className="Drop_menu">
                <button className="main_button"><i className="fas fa-caret-down"></i></button>
                <div className="Drop_menu_list">
                    <button className="list" onClick={DeleteElement}>Delete</button>
                </div>
            </div>          
        </>
    )
}

export default MoreOptions
