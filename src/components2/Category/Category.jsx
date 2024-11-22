import React from 'react'
import s from './Category.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

import Products from "/public//products.json"
import Card from '../Card/Card'

const Category = () => {
  return (
   <>
   <section className={s.category}>
   <div className="container">

      <SectionTitle orient="center">NEW ARRIVALS</SectionTitle>

      <div className={s.wrapper}>
         {Products.map(card => (
            <Card key={card.id} image={card.image} name={card.name} price={card.price} />
         ))}
      
     
      </div>
   </div>
   </section>
   </>
  )
}

export default Category