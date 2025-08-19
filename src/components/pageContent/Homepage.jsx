import React from 'react'
import Home from '../home/homes/Home.jsx' 
import Branding from '../home/Branding.jsx'
import About from '../home/about/About.jsx'
import Services from '../home/services/Services.jsx'
import Wrapper from '../home/Wrapper.jsx'
import Skill from '../home/Skill.jsx'

const Homepage = () => {
  return (
    <>
        <Home />
        <Branding />
        <About />
        <Services />
        <Wrapper />
        <Skill />
    </>
  
  )
}

export default Homepage
