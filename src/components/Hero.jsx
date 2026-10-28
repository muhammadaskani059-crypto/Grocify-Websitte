import React from 'react'
import Grocery from '../assets/images/grocery.png'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className=' min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col items-center md:pt-24 pt-35'>
        {/* Hero Content */}
        <div className='flex-1'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
            <h1 className='md:text-7xl/20 text-5xl/14 mt-3 font-bold capitalize'>
                testy <span className='text-orange-500'>organic</span> & <span className='text-orange-500'>veggies</span><br /> in your city
            </h1>
            <p className='text-zinc-600 md:text-lg text-md max-w-140 mt-5 mb-5'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
            <Button content="Shop Now" />

        </div>
        {/* Hero Image */}
        <div className='flex-1 '>
            <img src={Grocery} alt="" />
        </div>
    </div>
  )
}

export default Hero
