import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard'
import productList from './ProductList'

const productTabs = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']

const Product = () => {
  const [activeTab, setActiveTab] = React.useState('All')
  const visibleProducts = activeTab === 'All'
    ? productList
    : productList.filter(product => product.category === activeTab)

  return (
    <section id="products" className='max-w-350 mx-auto scroll-mt-24 px-10 py-20'>
      <Heading highlight="Our" heading="Product" />
      <div className='mt-10 flex flex-wrap justify-center gap-3' role='tablist' aria-label='Product categories'>
        {productTabs.map(tab => (
          <button
            key={tab}
            type='button'
            role='tab'
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-6 py-3 text-base font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white'
                : 'border border-orange-400 text-orange-500 hover:bg-orange-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Product
