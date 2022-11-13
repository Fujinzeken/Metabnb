import React from 'react'

const Image = ({image, stars}) => {
  return (
    
        <div className='home__image__container'>
                <div className='home__image'>
                <img src={image} alt='' />
                </div>

                <div className='home__image__desc'>
                    <div className='home__desc__words'>
                        <p>Desert King</p>
                        <p className='cost'>1MBT per night</p>
                    </div>
                    <div className='home__desc__words'>
                        <p>2345km away</p>
                        <p>Available for 2weeks stay</p>
                    </div>
                    <div>
                        <img src={stars} alt='rating'/>
                    
                    </div>
                </div>
            

        </div>
   
  )
}

export default Image
