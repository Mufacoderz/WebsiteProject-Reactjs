import FullscreenIcon from '@mui/icons-material/Fullscreen'
import React from 'react'
import Data from './Data.js'


const Works = () => {
  return (
    <div>
      <section className='work'>
        <div className="heading">
            <h3>MY WORK</h3>
            <h1>Some of My Completed Project</h1>
        </div>
        <div className="content">
            {Data.map((val)=>{
                return(
                    <>
                        <div className="box">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                                <div className="icon">
                                    <FullscreenIcon className='iconWork'/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
      </section>
    </div>
  )
}

export default Works
