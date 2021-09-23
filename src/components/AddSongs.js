import React,{useState} from 'react'
import './Addsongs.css'

const AddSongs = (addsong) => {
    const [songName,setSongName]=useState("")
    const [songSubtitle,setSongSubtitle]=useState("")
    const AddSongs=()=>{
        if(!songName && !songSubtitle){
            alert("Please Enter Your Song Name")
        }else{
            addsong.addSong(songName,songSubtitle);
            setSongName("")
            setSongSubtitle("")
        }
    }
    return (
        <>  
            <div className="main_div">
            <div className="Add_Songs">
                <i className="fas fa-plus"></i>
            </div>
            <div className="Adding_song">
            <div className="Song_name">
                <label >Enter Song Name: </label><br/>
                <input type="text" 
                className="Enter_song"
                value={songName}
                onChange={(event)=>{setSongName(event.target.value)}}
                /><br/>
            </div>
            <div className="New_Song_subtitle">
                <label >Enter Subtitle: </label><br/>
                <input type="text" 
                className="Song_subtitle_div"
                value={songSubtitle}
                onChange={(event)=>(setSongSubtitle(event.target.value))}
                /><br/>
            </div>
            <div className="submit">
                <button onClick={AddSongs}>Submit</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default AddSongs
