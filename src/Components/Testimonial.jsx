import React from 'react'
import ProfilePic from '../Assets/pexels-andrea-piacquadio-733872.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className='primary-subheading'>Comentarios</p>
        <h1 className='primary-heading'>¿Qué opinan?</h1>
        <p className='primary-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur quam in corporis nihil quaerat illo fugiat quasi voluptates esse.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam, odit nam vel commodi numquam?</p>
        <div className="testimonials-stars-container">
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <h2>Sophia Parker</h2>
      </div>
    </div>
  )
}

export default Testimonial