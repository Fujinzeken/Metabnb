import React, { useContext } from 'react'
import metamask from '../assets/images/image 66.svg'
import walletconnect from '../assets/images/image 69.svg'
import x from '../assets/images/x.svg'
import arrow from '../assets/images/arrow.svg'
import { AppContext } from '../App'

const Modal = () => {
   const {show, setShow} = useContext(AppContext)
  return (
    <div className='modal__container'>
      <div className='modal__wrapper'>
        <div className='modal__top'>
            <h2>Connect Wallet</h2>
            <img onClick={()=> show && setShow(false)} src={x} alt='cancle.png'/>
        </div>
        <hr></hr>
        <div className='modal__buttom'>
            <div className='modal__buttom__wrapper'>
            <p>Choose your preffered wallet:</p>
            <div className='wallet__icons'>
                <div className='icon'>
                    <img src={metamask} alt='metamask.png'/>
                    <p>Metamask</p>
                </div>
                <div className='icon__arrow'>
                    <img src={arrow} alt=''/>
                </div>

            </div>
            <div className='wallet__icons'>
                <div className='icon'>
                    <img src={walletconnect} alt='metamask.png'/>
                    <p>WalletConnect</p>
                </div>
                <div className='icon__arrow'>
                    <img src={arrow} alt=''/>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
