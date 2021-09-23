import React,{useState} from 'react'
import './SearchTab.css'

const SearchTab = () => {
    const [searchSong,setSearchSong]=useState("")
    const [searchedSongName,setSearchedSongName]=useState()
    const SearchSong=(event)=>{
        setSearchSong(event.target.value)
        console.log(setSearchedSongName)
    }
    const onSearch=()=>{
        console.log(searchedSongName);
       
        
    }
    return (
        <div className="search_tag">
            <input type="text" placeholder="Search your song" 
            onChange={SearchSong} 
            value={searchSong}/>
            <button onClick={onSearch}>Search</button>
        </div>
        
    )
}

export default SearchTab
