import React from 'react'
import './SongsInfo.css'

const SongInformatio = ({songInfo}) => {
    return (
        <div className="Main_div">
            <div className="songs_bio">
            <div className="Song_title">
                {songInfo.title} 
            </div>
            <div className="Song_subtitle">
                {songInfo.subtitle}
            </div>
            </div>
        </div>
    )
}

export default SongInformatio
