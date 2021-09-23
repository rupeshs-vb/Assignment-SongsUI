import React from 'react'
import './MoreOption.css'
const MoreOptions = ({songInfo}) => {
    const DeleteElement=(id)=>{
        console.log(id)
        const afterDeleted=Object.values(songInfo).filter((songInfo,ind)=>{
            return id!==ind;
        });    
        console.log(afterDeleted)
    }
    return (
        <>
            <div className="Drop_menu">
                <button className="main_button"><i className="fas fa-caret-down"></i></button>
                <div className="Drop_menu_list">
                    <button className="list" onClick={()=>DeleteElement(songInfo.id)}>Delete</button>
                </div>
            </div>          
        </>
    )
}

export default MoreOptions
