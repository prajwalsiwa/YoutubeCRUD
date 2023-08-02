import React, { useEffect, useState } from 'react'
import './AddVideo.css'

const AddVideo = ({addVideo,editVideo,updateVideo}) => {
    const [video, setVideo] = useState({
        channel: "Prajwal Vines",
        duration: "1 day ago",
        verified: true
    })
    const handleChange = (e) => {
        setVideo({
            ...video, 
            [e.target.name]: e.target.value
        }) 

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(editVideo){
               updateVideo(video)
        }
        else{
         addVideo(video)}

    }

     useEffect(() => {
       if(editVideo) setVideo(editVideo)
    }, [editVideo]);
   
  return (
    <div>
   <form onSubmit={handleSubmit}>
    <span>Title</span> <input type="text" name="title" onChange={handleChange} placeholder='title' value={video.title}/>
    <span>Views</span><input type="text" name="views" onChange={handleChange} placeholder='views' value={video.views} />
    <button type="submit">{editVideo? "EditVideo":"AddVideo"}</button>
   </form>
    </div>
  )
}

export default AddVideo
