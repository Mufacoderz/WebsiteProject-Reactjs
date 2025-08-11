import React from 'react'
import Logo from '../../../assets/logo.png'

const Header = () =>{
    return(
        <>
            <header className='header'>
                <div className="container flex">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header