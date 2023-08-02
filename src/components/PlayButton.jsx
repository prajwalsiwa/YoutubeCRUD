import './PlayButton.css'
import React, { useState } from 'react'

const PlayButton = ({onPlay,onPause,children}) => {
    const [playing, setPlaying] = useState(true)
    const handleClick = () =>{
        if(playing) onPlay();
        else onPause();
        setPlaying(!playing)
    }
  return (
    <div>
        <button onClick={handleClick}>{children} {playing? "▶️":"⏸️"}</button>
      
    </div>
  )
}

export default PlayButton
