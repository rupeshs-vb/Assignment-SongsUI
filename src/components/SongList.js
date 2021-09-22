import React,{useState} from 'react'
import SongsInfo from './SongsInfo'
import SongsData from './SongsData'

const SongList = () => {
    const [songsData,setSongsData ] = useState(SongsData)
    console.log(setSongsData);
    return (
        <>
            <SongsInfo songsData={songsData} />
        </>
    )
}

export default SongList
