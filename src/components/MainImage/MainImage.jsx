import React from 'react'
import Asset from '../MainImage/assets/img/img_dogs.jpg'
import '../MainImage/MainImage.css'

const MainImage = () => {
  return (
    <div className='profile-img'>
        <img className='logo' src={Asset} />
    </div>
  )
}

export default MainImage