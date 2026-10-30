import Heading from '../components/Heading'
import Values from '../components/Values'

const AboutUs = () => {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-350 px-10 py-16">
        <Heading highlight="About" heading="Grocify" />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-lg leading-8 text-zinc-600">
            We make it easier to bring fresh, quality groceries to your table. From everyday
            essentials to wholesome produce, Grocify helps you shop with confidence and convenience.
          </p>
        </div>
      </section>
      <Values />
    </main>
  )
}

export default AboutUs
