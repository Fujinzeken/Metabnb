import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'


const Dropdown = () => {
    const {setShow} = useContext(AppContext)
  return (
    <div className='dropdown'>
      <div className='dropdown__mid'>
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

                <button className='dropdown__btn' onClick={()=>setShow(true) }>Connect Wallet</button>
            </div>
    </div>
  )
}

export default Dropdown
