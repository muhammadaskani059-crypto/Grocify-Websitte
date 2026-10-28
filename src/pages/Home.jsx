import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Product from '../components/Product'
import Values from '../components/Values'
import Discount from '../components/Discount'
import Process from '../components/Process'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Product />
      <Discount />
      <Process />
    </div>
  )
}

export default Home
