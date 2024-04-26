import React from 'react'
import PickMeals from '../Assets/lunch.png'
import ChooseMeals from '../Assets/hand.png'
import DeliveryMeals from '../Assets/cargo-truck.png'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Elegí la comida',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab?',      
    },
    {
      image: ChooseMeals,
      title: 'Elije la frecuencia',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab?',      
    },
    {
      image: DeliveryMeals,
      title: 'Entregas Rapidas',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab?',      
    },
  ]
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className='primary-subheading'>Nuestro Trabajo</p>
        <p className='primary-heading'>¿Cómo funciona?</p>
        <p className='primary-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta asperiores sint eius illo. Eveniet reprehenderit repellat facere nobis, temporibus nostrum?</p>
      </div>
      <div className="work-section-bottom">
        {
          workInfoData.map((item) => (
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work