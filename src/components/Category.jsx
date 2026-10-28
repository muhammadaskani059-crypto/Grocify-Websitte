import React from 'react'
import Heading from './Heading'
import Button from './Button'
import FruitsCat from '../assets/images/fruits-and-veggies.png'
import DairyCat from '../assets/images/dairy-and-eggs.png'
import SeaFoodCat from '../assets/images/meat-and-seafood.png'

const  category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    Image: FruitsCat
  },

  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    Image: DairyCat
  },

  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more',
    Image: SeaFoodCat
  },

]

const Category = () => {

  const renderCards = category.map(card=>{
    return(
      // Card
      <div className='flex-1 basis-75'>
        {/* Card Image */}
        <div className='w-full min-h-[30vh]  relative'>
          <img src={card.Image} className='absolute bottom-0 -mb-10 '/>
        </div>
        {/* Card Content */}
        <div className='bg-zinc-100 pt-17 p-10 rounded-2xl'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
          <Button content="See All"/>
        </div>
      </div>
    )
  })

  return (
    <section>
        <div className='py-20 max-w-350 mx-auto px-10'>
        <Heading highlight="Shop" heading="Our Category" />
        {/* Category Card */}
          <div className='flex flex-wrap md:mt-15 gap-10'>
               {renderCards}
          </div>
        </div>
    </section>
  )
}
export default Category