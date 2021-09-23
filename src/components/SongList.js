import React,{useState} from 'react'
import SongsInfo from './SongsInfo'
import SongsData from './SongsData'
import AddSongs from './AddSongs'
const SongList = () => {
    const addSong=(songtitle,songsubtitle)=>{
        const newSong={
            id:songsData[songsData.length-1].id+1,
            like:0,
            title:songtitle,
            subtitle:songsubtitle,
            media:" "
        }
        setSongsData([...songsData,newSong])
    }
    const [songsData,setSongsData ] = useState(SongsData)
    console.log(songsData);
    return (
        <>
            <SongsInfo songsData={songsData} />
            <AddSongs addSong={addSong}/>
            
        </>
    )
}

export default SongList
 