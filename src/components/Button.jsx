import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-600 transition-all duration-300'>{props.content}</button>
  )
}

export default Button
