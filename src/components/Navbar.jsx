import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import logo from '../assets/meta_logo.png' 
const Navbar = () => {
    const {setShow} = useContext(AppContext)
  return (
    <nav className='navbar'>
        <div className='navbar__wrapper'>
            <div className='navbar__left'>
                <img src={logo} alt='metabnb_logo.png' />
            </div>
            <div className='navbar__mid'>
            <Link to='/' className='link'><span className='nav__title'>
                    Home
                </span></Link>

                <Link to='/place_to_stay' className='link'><span className='nav__title'>
                    Place to stay
                </span></Link>
                <span className='nav__title'>
                    NFTs
                </span>
                <span className='nav__title'>
                    Community
                </span>
            </div>
            <div className='navbar__right'>
                <button className='wallet__btn' onClick={()=>setShow(true)}>Connect Wallet</button>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
