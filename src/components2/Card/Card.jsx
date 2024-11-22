import React from 'react'
import s from './Card.module.scss'

const Card = ({image, name="Soon...", rate="0", price="Нету в наличии"}) => {
  return (
   <>
   <div className={s.card}>
   <img src={image} alt="" />
   <h3>{name}</h3>
   <img src={price} alt="" />

   </div>
   </>
  )
}

export default Card