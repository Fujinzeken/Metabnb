import React from 'react'
import img3 from '../assets/images/image 3.svg'
import img4 from '../assets/images/image 4.svg'
import img5 from '../assets/images/image 5.svg'
import img6 from '../assets/images/image 6.svg'
const Home = () => {
  return (
    <div className='home__container'>
        <div className='home__top'>
            <div className='home__top__left'>
                <h1 className='home__header'>Rent a <span className='header__diff'>Place</span> 
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
  )
}

export default Home
