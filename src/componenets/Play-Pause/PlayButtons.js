import React, { useState } from 'react'
import "./Play.css"

const PlayButtons = ({ message, children, onPlay, onPause }) => {
    // const [Playing, setPlaying] = useState(false)
    let Playing = false // dont use this beacuse react said use //"useState Hook"\\ in this senario
    const handleclick = () => {
        if (Playing) {
            onPause()
        } else {
            onPlay()
        }

        Playing = !Playing
    
        // Playing ? onPause() : onPlay()
    }
    return (

        <button  onClick={handleclick}>{children} : {Playing ? ">" : "||"}</button>

    )
}

export default PlayButtons