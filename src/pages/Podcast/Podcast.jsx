import React, { useEffect, useState } from 'react';
import './Podcast.css';
import axios from '../../utils/axiosCostume';

function Podcast() {
  const [info, setInfo] = useState([]);
  const [audio, setAudio] = useState('');

  const fetchPodcast = async () => {
    try {
      const response = await axios.get('/podcasts');
      if (response.status >= 200 && response.status < 300) {
        setInfo(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPodcast();
  }, []);

  const audioTune = new Audio(audio);

  const playSound = (id) => {
    console.log(id)
    console.log(info)
    const podcast = info.find((elem) =>elem._id === id);
    console.log(podcast)
    if (podcast) {
      setAudio(podcast.audio);
      audioTune.play();
    }
  };

  const pauseSound = (id) => {
    const podcast = info.find((elem) => elem._id === id);
    console.log(podcast)
    if (podcast) {
      console.log('test')
      setAudio(podcast.audio);
      console.log('test1')
      audioTune.pause();
      console.log('tes3')
    }
  };

  return (
    <div className='app__podcast'>
      {info.length > 0 &&
        info.map((elem) => (
          <div className='story' key={elem._id}>
            <div className='story-info'>
              <div className='podcast'>
                <h1>{elem.title}</h1>
              </div>
              <div className='img'>
                <img src={elem.image} alt={elem.title} />
              </div>
            </div>
            <div className='buttons'>
              <button onClick={() => playSound(elem._id)}>Play</button>
              <button onClick={() => pauseSound(elem._id)}>Pause</button>
              <button onClick={() => deleteStory(elem.storyId)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Podcast;
