import React, { useEffect, useState } from 'react'
import './Podcast.scss'

function Podcast() {

    const info = [
        {
            title : 'Stability Stories: Exploring the Economic Impacts in Gaza',
            image : 'https://res.cloudinary.com/dspruj3un/image/upload/q_10/v1703629287/f43499ef-c9ea-4565-999d-3b85471e175e.png',
            audio : 'https://res.cloudinary.com/dqvkoqlqh/video/upload/fl_splice,l_video:af4ddf33-99ee-4b29-875b-8fca9e853aa9/fl_layer_apply/fl_splice,l_video:4aa060e4-c5c2-49d7-a15d-8a23545c597d/fl_layer_apply/fl_splice,l_video:2d00baab-cda1-4cc2-b9a3-1cbc696cc5fd/fl_layer_apply/94cb58bf-02c6-4c6c-94d9-05dd22d97c44.mp3'
        }
    ]

    const audioTune = new Audio('<https://res.cloudinary.com/dqvkoqlqh/video/upload/fl_splice,l_video:af4ddf33-99ee-4b29-875b-8fca9e853aa9/fl_layer_apply/fl_splice,l_video:4aa060e4-c5c2-49d7-a15d-8a23545c597d/fl_layer_apply/fl_splice,l_video:2d00baab-cda1-4cc2-b9a3-1cbc696cc5fd/fl_layer_apply/94cb58bf-02c6-4c6c-94d9-05dd22d97c44.mp3>')


    useEffect(()=>{
        audioTune.load();
    },[])

    const playSound = () => {
        audioTune.play();
    }

    const pauseSound = () => {
        audioTune.pause();
    }


  return (
    <div className='app__podcast'>
      {
        info.length>0 &&
        info.map(elem=>(
          <div className='story'>
            <div className="story-info">
              <div className="podcast">
                <h1>{elem.title}</h1>
              </div>
              <div className='img'>
                <img src={elem.image} alt={elem.title}/>
              </div>
            </div>
            <div className='buttons'>
                <button onClick={playSound}>Play</button>
                <button onClick={pauseSound}>Pause</button>
                <button onClick={()=>{deleteStory(elem.storyId)}}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Podcast
