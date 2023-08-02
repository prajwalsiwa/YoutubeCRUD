import Video from './components/Video';
import PlayButton from './components/PlayButton';
import objDB from './Data/Data';
import './App.css';
import AddVideo from './components/AddVideo';
import {useState } from 'react';

function App() {
  const [obj,setObj] = useState(objDB)
  const [editableVideo, setEditableVideo]= useState(null)
  const addVideo = (video) => {
    setObj([
      ...obj, {
        ...video, id:obj.length+1
      }
    ])
    
  }
  const deleteVideo = (id) => {
   setObj(obj.filter((v)=>v.id!==id))
  }
 
  const editVideo = (id) => {
    let newVideo=obj.find((v)=>v.id===id)
    setEditableVideo(newVideo)
   
  }
  const updateVideo = (video) => {
   let index = obj.findIndex((v)=>v.id===video.id)
   let newVideo = [...obj]
   newVideo.splice(index,1,video)
  //  newVideo[index].title=video.title
  //  newVideo[index].views= video.views
   setObj(newVideo)
  }
 

  return (
    <div className="App">
      {
        obj.map((videos)=>{
          return(
            <Video 
            id={videos.id}
            title={videos.title}
            channel={videos.channel}
            views={videos.views}
            duration={videos.duration}
            verified={videos.verified}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
            ><PlayButton 
            onPlay={()=>console.log("Playing...",videos.title)}
            onPause={()=>console.log("Paused...",videos.title)}
            >{videos.title}</PlayButton></Video>
          )
        })
      }
      <AddVideo editVideo={editableVideo} updateVideo={updateVideo} addVideo={addVideo}></AddVideo>
    
    </div>
  );
}

export default App;
