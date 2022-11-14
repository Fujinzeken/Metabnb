import React from 'react'
import footer from '../assets/images/footer_icon.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__left'>
                <div className='footer__left__logo'>
                    <img src={footer} alt='footer.png' />
                </div>
                <div className='footer__left__icons'>
                <img src={facebook} alt='footer.png' />
                <img src={instagram} alt='footer.png' />
                <img src={twitter} alt='footer.png' />
                </div>
                <p className='copyright'>&copy;2022 Metabnb</p>
            </div>
            <div className='footer__right'>
                <div className='footer__links'>
                    <h6 className='footer__link__topic'>Community</h6>
                    <p>NFTs</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
                </div>
                <div className='footer__links'>
                    <h6 className='footer__link__topic'>Places</h6>
                    <p>Castle</p>
                    <p>Farms</p>
                    <p>Beach</p>
                    <p>Learn More</p>
                </div>
                <div className='footer__links about'>
                    <h6 className='footer__link__topic'>About Us</h6>
                    <p>Road Map</p>
                    <p>Creator</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
