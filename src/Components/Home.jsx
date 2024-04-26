import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/right-bg.png'
import BannerImage from '../Assets/home-banner-image.png'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className='primary-heading'>
            Tu comida favorita!
          </h1>
          <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id?
          </p>
          <button className='secondary-button'>Ordena Ahora</button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home