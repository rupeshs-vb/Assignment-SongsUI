import React from 'react'
import './Addsongs.css'
const AddSongs = () => {
    return (
        <>
            <div className="Add_Songs">
                <i class="fas fa-plus"></i>
            </div>
            <div className="Adding_song">
            <div className="Song_name">
                <label >Enter Song Name: </label><br/>
                <input type="text" /><br/>
            </div>
            <div className="Song_subtitle">
                <label >Enter Subtitle: </label><br/>
                <input type="text" /><br/>
            </div>
            <div className="submit">
                <button>Submit</button>
            </div>
            </div>
        </>
    )
}

export default AddSongs
