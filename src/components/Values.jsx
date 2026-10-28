import React from 'react'
import Heading from './Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../assets/images/basket-full-vegetables.png'


const value = [
    {
        id: 1,
        title:'Trust',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },

    {
        id: 2,
        title:'Always Fresh',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },

    {
        id: 3,
        title:'Food Safety',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />    
    },

    {
        id: 4,
        title:'100% Organic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />    
    }
]

const Values = () => {

    const LeftValues = value.slice(0,2).map(item=>{
        return(
            <div className='flex md:flex-row-reverse items-center gap-7 md:mb-0 mb-7'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h4 className='text-zinc-600 text-3xl font-bold'>{item.title}</h4>
                    <p className='text-zinc-500 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })

    const RightValues = value.slice(2,5).map(item=>{
        return(
            <div className='flex items-center gap-7 md:mb-0 mb-7'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='text-left'>
                    <h4 className='text-zinc-600 text-3xl font-bold'>{item.title}</h4>
                    <p className='text-zinc-500 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })
  return (
    <section className='max-w-350 mx-auto px-10'>
        <Heading highlight="Our" heading="Values" />
        <div className='flex md:flex-row flex-col md:gap-5 mt-15'>

            {/* Left Values */}
            <div className='md:min-h-100 flex flex-col justify-between'>
                {LeftValues}
            </div>

            <div className='md:flex w-1/2 hidden'>
                <img src={Basket}/>
            </div>

            {/* Right Values */}
            <div className='md:min-h-100 flex flex-col justify-between'>
                {RightValues}
            </div>
        </div>
    </section>
  )
}

export default Values
