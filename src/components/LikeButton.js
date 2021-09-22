import React,{useState} from 'react'

const LikeButton = ({songInfo}) => {
    const [likeInc,setLikeInc]=useState(songInfo.like)
    const [likeStatus,setLikeStatus]=useState(true)
    const[thumbsUp,setThumbsUp]=useState(<i className="fas fa-heart" ></i>)
    const LikeInc=()=>{
        if(likeStatus===true){
            setLikeInc(likeInc+1)
            setLikeStatus(false)
            setThumbsUp(<i className="fas fa-heart" style={{color:"red"}}></i>)
        }
        else{
            setLikeInc(likeInc-1)
            setLikeStatus(true)
            setThumbsUp(<i className="fas fa-heart" ></i>)
        }
    }
    return (
        <> 
        
            <h2>{likeInc}</h2>
            <h2 onClick={LikeInc}>{thumbsUp}</h2>
        </>
    )
}

export default LikeButton
