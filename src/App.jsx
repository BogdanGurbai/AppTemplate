import 'bootstrap/dist/css/bootstrap.css'
import './components/css/extraStyles.css'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Academics from './components/Academics.jsx'
import Extra from './components/Extra.jsx'
import Home from './components/Home.jsx'
import Project1 from './components/Project1.jsx'
import Project2 from './components/Project2.jsx'

function App() {

  return (
    <>
      <div className='sticky-top'><Navbar/></div> 
      <Routes>
        <Route path="/AppTemplate" element={<Home/>}/>
        <Route path="/AppTemplate/projects" element={<Projects/>}/>
        <Route path="/AppTemplate/projects/project1" element={<Project1/>}/>
        <Route path="/AppTemplate/projects/project2" element={<Project2/>}/>
        <Route path="/AppTemplate/academics" element={<Academics/>}/>
        <Route path="/AppTemplate/extra" element={<Extra/>}/>
      </Routes>
    </>
  )
}

export default App
