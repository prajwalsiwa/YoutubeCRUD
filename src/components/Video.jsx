import './Video.css'

const Video = ({id,title,channel,views,duration,verified,children,deleteVideo,editVideo}) => {
  return (
    <div className='container'>
        <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
        <button className='close' onClick={()=>deleteVideo(id)}>X</button>
        <div className="pic">
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="doggy" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified? "✅":null}</div>
        <div className="views">{views} <span>. </span> {duration}</div>
      {children}
    </div>
  )
}

export default Video
