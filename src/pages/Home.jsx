import React, { useContext } from 'react'
import img3 from '../assets/images/image 3.svg'
import img4 from '../assets/images/image 4.svg'
import img5 from '../assets/images/image 5.svg'
import img6 from '../assets/images/image 6.svg'
import test1 from '../assets/images/test1.svg'
import metamask from '../assets/images/metamask.svg'
import opensea from '../assets/images/opensea.svg'
import Mid from '../components/Mid'
import image7 from '../assets/images/image 7.svg'
import image8 from '../assets/images/image 8.svg'
import image9 from '../assets/images/image 9.svg'
import Modal from '../modal/Modal'
import { AppContext } from '../App'

const Home = () => {
    const {show} = useContext(AppContext)
  return (
    <div className='container'>
    <div className='home__container'>
        <div className='home__top'>
            <div className='home__top__left'>
                <h1 className='home__header'>Rent a <span className='header__diff'>Place </span> 
                away from <span className='header__diff'>Home</span> in the <span className='header__diff'>Metaverse</span></h1>
                <div className='home__top__words'>
                    <p>we provide you access to luxury and affordable houses in the metaverse,
                     get a chance to turn your imagination to reality at your comfort zone.</p>
                </div>
                <form className='input__box'>
                    <input type='input' placeholder='search for location' className='input'/>
                    <button className='wallet__btn search'>Search</button>
                </form>

            </div>
            <div className='home__top__right'>
                <div className='img__container left'>
                    <img src={img4} alt='image5.png' />
                    <img src={img6} alt='image5.png' />
                </div>
                <div className='img__container'>
                    <img src={img3} alt='image3.png' />
                    <img src={img5} alt='image5.png' />
                </div>
            </div>
        </div>

      
    </div>
    
        <div className='divide__line'>
            <div className='divide__line__content'>
                <img src={test1} alt='' />
                <img src={metamask} alt='' />
                <img src={opensea} alt='' />
            </div>
        </div>

       <Mid/>
       <div className='home__bottom'>
            <div className='home__bottom__left'>
                <h3>Metabnb NFTs</h3>
                <p>Discover our NFT gift cards collection. 
                Loyal customers gets amazing gift cards which are traded as NFTs. 
                These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className='home__bottom__btn'>Learn More</button>
            </div>
            <div className='home__bottom__right'>
                <img className='img7 img' src={image7} alt='' />
                <img className='img8 img' src={image8} alt='' />
                <img className='img9 img' src={image9} alt='' />
            </div>
       </div>
       {show &&<Modal/>}
    </div>
  )
}

export default Home
