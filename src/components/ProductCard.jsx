import { FaCartPlus, FaHeart } from 'react-icons/fa'
import Button from './Button'

const ProductCard = ({ product }) => {
  return (
    <article className='overflow-hidden rounded-2xl bg-zinc-100 p-5'>
      <div className='relative flex h-52 items-center justify-center rounded-xl bg-white p-5'>
        <img src={product.image} alt={product.name} className='h-full w-full object-contain' />
        <button
          type='button'
          aria-label={`Add ${product.name} to favorites`}
          className='absolute right-3 top-3 rounded-full bg-white p-3 text-orange-500 shadow-sm transition-colors hover:bg-orange-50'
        >
          <FaHeart aria-hidden='true' />
        </button>
      </div>
      <div className='flex items-center justify-between gap-3 pt-4'>
        <div>
          <h3 className='text-lg font-bold text-zinc-800'>{product.name}</h3>
          <p className='mt-1 text-sm text-zinc-500'>{product.category}</p>
          <p className='mt-2 font-semibold text-orange-500'>${product.price.toFixed(2)}</p>
        </div>
        <button
          type='button'
          aria-label={`Add ${product.name} to cart`}
          className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-b from-orange-400 to-orange-500 text-white transition-all duration-300 hover:scale-105 hover:from-orange-600'
        >
          <FaCartPlus aria-hidden='true' />
        </button>
      </div>
      <div className='mt-5 flex justify-center'>
        <Button content='Shop Now' />
      </div>
    </article>
  )
}

export default ProductCard
