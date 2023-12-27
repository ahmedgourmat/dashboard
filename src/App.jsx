import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './componants/SideBar/SideBar';
import Client from './pages/Client/Client';
import Stories from './pages/Stories/Stories';
import Statistique from './componants/Statistique/Statistique';
import Login from './pages/Login/Login';
import { useState } from 'react';
import Podcast from './pages/Podcast/Podcast';

function App() {

  return (
    <div className='app'>
      {localStorage.getItem('token') && <SideBar/>}
      <BrowserRouter>
      <div className='app__main'>
        {localStorage.getItem('token') && <Statistique/>}
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users" element={<Client />}/>
          <Route path="/stories" element={<Stories />}/>
          <Route path="/podcast" element={<Podcast />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
