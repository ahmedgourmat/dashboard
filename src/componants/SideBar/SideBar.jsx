import React from 'react'
import './SideBar.scss'

function SideBar() {
  return (
    <div className='app__sideBar'>
      <div className="app__sideBar-title">
        <h1>SEKAI</h1>
      </div>
      <div className="app__sideBar-list">
        <p>Dashboard</p>
        <a href='http://localhost:5173/stories' className='elem'>Stroies</a>
        <a href='http://localhost:5173/users' className='elem'>Users</a>
        <a href='http://localhost:5173/podcast' className='elem'>Podcast</a>
      </div>
    </div>
  )
}

export default SideBar
