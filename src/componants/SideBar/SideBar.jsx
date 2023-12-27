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
        <a href='https://dashboard-3aaq.vercel.app/stories' className='elem'>Stroies</a>
        <a href='https://dashboard-3aaq.vercel.app/users' className='elem'>Users</a>
        <a href='https://dashboard-3aaq.vercel.app/podcast' className='elem'>Podcast</a>
      </div>
    </div>
  )
}

export default SideBar
