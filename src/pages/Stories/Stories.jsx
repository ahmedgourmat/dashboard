import React, { useEffect, useState } from 'react'
import './Stories.css'
import axios from '../../utils/axiosCostume'

function Stories() {

  const [info , setInfo] = useState([])

  const [bool , setBool] = useState(false)


  const fetchStories=async()=>{
    try {
      const response =await axios.get('/stories')
      if(response.status >= 200 && response.status < 300){
        setInfo(response.data.data)
        setBool(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchStories()
  },[])

  const deleteStory = async (storyId) => {
  try {
    const response = await axios.delete(`/stories/${storyId}`);
    console.log(info)
    if (response.status >= 200 && response.status < 300) {
      setInfo((prevInfo) => prevInfo.filter((story) => story.storyId !== storyId));
    }
  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className='app__stories'>
      {
        info.length>0 &&
        info.map(elem=>(
          <div className='story'>
            <div className="story-info">
              <div className="text">
                <h1>{elem.title}</h1>
                <p>{{elem.content.slice(0,300)+'. . .'}}</p>
              </div>
              <div className='img'>
                <img src={elem.image} alt={elem.title}/>
              </div>
            </div>
            <button onClick={()=>{deleteStory(elem.storyId)}}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Stories
