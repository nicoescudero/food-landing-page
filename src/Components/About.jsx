import React from 'react'
import AboutBackground from '../Assets/left-bg.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className='primary-subheading'>Acerca de</p>
        <h1 className='primary-heading'>La alimentación es una parte importante de una dieta equilibrada</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse numquam quia commodi dolor sunt sapiente nulla? Nisi, qui eaque!
        </p>
        <div className="about-buttons-container">
          <button className='secondary-button'>Más Información</button>
          <button className='watch-video-button'> <BsFillPlayCircleFill/> Reproducir Video</button>
        </div>
      </div>
    </div>
  )
}

export default About