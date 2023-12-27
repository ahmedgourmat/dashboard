import React from 'react'
import './Statistique.css'

function Statistique() {
    const arr = [
        {
            name : "members",
            number : 2415
        },
        {
            name : "stories",
            number : 58194
        },
        {
            name : "news" ,
            number : 210
        }
    ]
  return (
    <div className='app__statistiques'>
      {
        arr.map(elem=>(
            <div className='box'>
                <h3>{elem.name}</h3>
                <p>{elem.number}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Statistique
