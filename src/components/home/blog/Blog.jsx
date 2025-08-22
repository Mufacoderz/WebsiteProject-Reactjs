import React from 'react'
import Blogdata from './Blogdata'

const Blog = () => {
  return (
    <div>
      <section className='blog services'>
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every week</h1>
          </div>

          <div className="contain grid topMargin">
            {
              Blogdata.map((val)=>{
                return(
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
