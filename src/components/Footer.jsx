import { PiPlantFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-350 px-10 py-20">
        <div className="grid gap-12 border-b border-zinc-700 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold text-white">
              <span className="flex size-11 items-center justify-center rounded-full bg-orange-500 text-xl">
                <PiPlantFill aria-hidden="true" />
              </span>
              Groc<span className="text-orange-400">ify</span>
            </Link>
            <p className="mt-5 max-w-md leading-7 text-zinc-400">
              Fresh, quality groceries for your everyday table. Shop your favorites and enjoy
              convenient delivery right to your door.
            </p>
            <Link
              to="/#products"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Explore products
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              <li><Link to="/" className="transition-colors hover:text-orange-400">Home</Link></li>
              <li><Link to="/about-us" className="transition-colors hover:text-orange-400">About Us</Link></li>
              <li><Link to="/process" className="transition-colors hover:text-orange-400">Our Process</Link></li>
              <li><Link to="/contact-us" className="transition-colors hover:text-orange-400">Contact Us</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-bold text-white">Shop Categories</h2>
            <ul className="mt-5 space-y-3">
              <li><Link to="/#categories" className="transition-colors hover:text-orange-400">Fruits &amp; Vegetables</Link></li>
              <li><Link to="/#categories" className="transition-colors hover:text-orange-400">Dairy &amp; Eggs</Link></li>
              <li><Link to="/#categories" className="transition-colors hover:text-orange-400">Meat &amp; Seafood</Link></li>
              <li><Link to="/#products" className="transition-colors hover:text-orange-400">Browse all products</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-sm text-zinc-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Grocify. All rights reserved.</p>
          <p>Fresh choices, delivered with care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
