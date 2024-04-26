import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter/>
          <SiLinkedin/>
          <BsYoutube/>
          <FaFacebook/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Teléfono</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Carreras</span>
          <span>Comentarios</span>
          <span>Trabajos</span>
        </div>
        <div className="footer-section-columns">
          <span>264-499-9999</span>
          <span>hii@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos y Condiciones</span>
          <span>Politica y Privacidad</span>
        </div>
      </div>
    </div>
  )
}

export default Footer