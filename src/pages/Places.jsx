import React, { useContext } from 'react'
import Image from '../components/Image'
import frame1 from '../assets/images/home_mid/Frame 1.svg'
import frame2 from '../assets/images/home_mid/Frame 2.svg'
import frame3 from '../assets/images/home_mid/Frame 3.svg'
import frame4 from '../assets/images/home_mid/Frame 4.svg'
import frame5 from '../assets/images/home_mid/Frame 5.svg'
import frame6 from '../assets/images/home_mid/Frame 6.svg'
import frame7 from '../assets/images/home_mid/Frame 7.svg'
import frame8 from '../assets/images/home_mid/Frame 8.svg'
import frame9 from '../assets/images/Frame 9.svg'
import frame10 from '../assets/images/Frame 10.svg'
import frame11 from '../assets/images/Frame 11.svg'
import frame12 from '../assets/images/Frame 12.svg'
import frame13 from '../assets/images/Frame 13.svg'
import frame14 from '../assets/images/Frame 14.svg'
import frame15 from '../assets/images/Frame 15.svg'
import frame16 from '../assets/images/Frame 16.svg'
import location from '../assets/images/location.svg'
import stars from '../assets/images/home_mid/stars.svg'
import Modal from '../modal/Modal'
import { AppContext } from '../App'
 

const Places = () => {
    const {show} = useContext(AppContext)
  return (
    <div className='places'>
        <div className='places__top'>
            <span>Resturant</span>
            <span>Cottage</span>
            <span>Castle</span>
            <span>fantasy City</span>
            <span>beach</span>
            <span>Carbins</span>
            <span>off-grid</span>
            <span>Farm</span>
            <select className='select__input'>
            <option>Resturant</option>
            <option>Cottage</option>
            <option>Castle</option>
            <option>fantasy City</option>
            <option>beach</option>
            <option>Carbins</option>
            <option>off-grid</option>
            <option>Farm</option>
            </select>
            <img src={location} alt='location.png'/>
        </div>
        <div className='home__image__wrapper'>
        <Image image={frame5} stars={stars}/>
        <Image image={frame6} stars={stars}/>
        <Image image={frame7} stars={stars}/>
        <Image image={frame8} stars={stars}/>
        <Image image={frame1} stars={stars}/>
        <Image image={frame2} stars={stars}/>
        <Image image={frame3} stars={stars}/>
        <Image image={frame4} stars={stars}/>
        <Image image={frame9} stars={stars}/>
        <Image image={frame10} stars={stars}/>
        <Image image={frame11} stars={stars}/>
        <Image image={frame12} stars={stars}/>
        <Image image={frame13} stars={stars}/>
        <Image image={frame14} stars={stars}/>
        <Image image={frame15} stars={stars}/>
        <Image image={frame16} stars={stars}/>

        </div>
        {show &&<Modal/>}
    </div>
  )
}

export default Places
