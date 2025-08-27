import React from 'react'
import HomeImg from '../../../assets/home1.png'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={HomeImg} alt="taik" />
            </div>
          </div>
          <div className="right topMargin homeTopMargin">
            <h1>I AM <br />MUHAMMAD FADIL</h1>
            <div className="socialIcon">
              <i className='fab fa-facebook facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, nobis. Ratione commodi assumenda quia accusamus ea blanditiis voluptas laudantium eveniet vero. Quam non sint est assumenda laboriosam quis ad vitae?</p>

<button className='primary-btn'>Contact Us</button>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
