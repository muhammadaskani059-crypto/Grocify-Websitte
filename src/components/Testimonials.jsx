import { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Heading from './Heading'
import customer1 from '../assets/images/customer1.jpg'
import customer2 from '../assets/images/customer2.jpg'
import customer3 from '../assets/images/customer3.jpg'
import customer4 from '../assets/images/customer4.jpg'
import customer5 from '../assets/images/customer5.jpg'

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Food Blogger',
    image: customer1,
    quote: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!'
  },
  {
    name: 'David Smith',
    role: 'Chef',
    image: customer2,
    quote: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!'
  },
  {
    name: 'Alya Zahra',
    role: 'Model',
    image: customer3,
    quote: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable."
  },
  {
    name: 'Carlos Mendes',
    role: 'Fitness Coach',
    image: customer4,
    quote: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!'
  },
  {
    name: 'Natcha Phongchai',
    role: 'Nutritionist',
    image: customer5,
    quote: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.'
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const showPrevious = () => {
    setActiveIndex(index => (index - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    setActiveIndex(index => (index + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="max-w-350 mx-auto scroll-mt-24 px-10 py-20">
      <Heading highlight="Customers" heading="Saying" />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map(offset => {
          const testimonial = testimonials[(activeIndex + offset) % testimonials.length]

          return (
            <article
              key={testimonial.name}
              className="flex h-full flex-col items-center rounded-2xl border border-orange-100 bg-white p-8 text-center shadow-lg shadow-orange-100/60 animate-[testimonial-slide-in_400ms_ease-out]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="size-20 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-zinc-800">{testimonial.name}</h3>
              <p className="mt-1 text-zinc-600">{testimonial.role}</p>
              <p className="mt-6 flex-1 text-lg leading-relaxed text-zinc-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </article>
          )
        })}
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-orange-400 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          <BsArrowLeft aria-hidden="true" />
        </button>
        <div className="flex gap-2" aria-label="Choose testimonial group">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Start with testimonial from ${testimonial.name}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={`size-2.5 rounded-full transition ${
                activeIndex === index ? 'bg-orange-500' : 'bg-orange-200 hover:bg-orange-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-orange-400 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          <BsArrowRight aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
