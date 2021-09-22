import React from 'react'
import LikeButton from './LikeButton'
import SongInformatio from './SongInformatio'
import MoreOptions from './MoreOptions'
import SearchTab from './SearchTab'
import './SongsInfo.css'
import AddSongs from './AddSongs'
const SongsInfo = ({songsData}) => {
    return (
        <>  
            <SearchTab/><hr/>
            {
                songsData.map((songInfo)=>{
                    return(
                        
                        <div key={songInfo.id}>
                            <div className="Song_menu">
                            <div className="likebutton">
                                <LikeButton songInfo={songInfo} />          
                            </div>
                            
                            <div className="Song_information">    
                                <SongInformatio songInfo={songInfo}/>
                            </div>
                            <div className="audio_container">
                                <div className="audio_tag">
                                    <audio src="" controls />
                                </div>
                            
                            <div className="Drop_menu">
                                <MoreOptions songInfo={songInfo}/>
                            </div>
                            </div>
                            </div>
                            <hr/>
                        </div>
                        
                    );
                })
            }
            <AddSongs/>
        </>
    )
}

export default SongsInfo
