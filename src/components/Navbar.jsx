import React from 'react'
import logo from '../assets/meta_logo.png' 
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__wrapper'>
            <div className='navbar__left'>
                <img src={logo} alt='metabnb_logo.png' />
            </div>
            <div className='navbar__mid'>
                <span className='nav__title'>
                    Home
                </span>
                <span className='nav__title'>
                    Place to stay
                </span>
                <span className='nav__title'>
                    NFTs
                </span>
                <span className='nav__title'>
                    Community
                </span>
            </div>
            <div className='navbar__right'>
                <button className='wallet__btn'>Connect Wallet</button>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar
