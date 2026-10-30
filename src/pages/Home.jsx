import Hero from '../components/Hero'
import Category from '../components/Category'
import Product from '../components/Product'
import Values from '../components/Values'
import Discount from '../components/Discount'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Category />
      <Values />
      <Product />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  )
}

export default Home
