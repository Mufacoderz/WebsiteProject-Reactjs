import React from 'react'
import logo1 from '../../assets/logo5.png'

const Footer = () => {
  return (
    <footer>
        <div className="container grid1">
            <div className="box">
                <img src={logo1} alt="" />
                <p>Lorem ipsum suspendisse ultrices gravide. Risus commodo viverra maecenas</p>
                <div className="socialIcon">
                    <i className='fab fa-facebook '></i>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                    <i className='fab fa-youtube '></i>
                    <i className='fab fa-dribbble '></i>
                </div>
            </div>
            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2024</span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2024</span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2024</span>
                </div>
            </div>
            <div className="box">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum suspendisse ultrices gravide. Risus commodo viverra maecenas</p>
                <div className="icon">
                    <i className='fa fa-location-dot'></i>
                    <label htmlFor="">Location: Loa Janan, Kutai Kartanegara, Kalimantan Timur, Indonesia</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor="">Phone: +62 813 4872 6973</label>
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor="/">Email: mf9555758@gmail.com</label>
                </div>
            </div>
        </div>
        <div className="legal container">
            <p>Copyright @2025. All rights reserved.</p>
            <label htmlFor="">
                Desigm & Developed by <span>MUFADEV</span>
            </label>
        </div>
    </footer>
  )
}

export default Footer
