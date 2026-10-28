import React from 'react'
import Button from './Button'
import FreshFruit from '../assets/images/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='md:bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruit})`}}>
        <div className='flex md:flex-row flex-col max-w-350 mx-auto px-10 py-20'>
            <span className='md:text-9xl text-5xl text-orange-400 font-bold md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-175'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount!</h3>
                <p className='text-zinc-500 md:my-6 my-3'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount
