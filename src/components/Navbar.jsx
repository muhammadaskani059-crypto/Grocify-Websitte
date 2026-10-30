import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";


const Navbar = () => {

    const  [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setScrolled ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])


    return (
        <div>
            <header className={` bg-white mb-2 fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
                <nav className='max-w-350 mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>

                    <NavLink to="/" className='text-3xl font-bold'>
                        Gr<span className='text-orange-500 uppercase'>o</span>cify</NavLink>

                    {/* Destop Menu */}

                    <ul className='md:flex items-center gap-x-15 hidden'>
                        <li>
                            <NavLink to="/" end className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/process" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`}>Process</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`}>Contact Us</NavLink>
                        </li>
                    </ul>

                    {/* Nav Acton */}
                    <div className='flex items-center gap-x-5'>
                        <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                            <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'  className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                            <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
                                <IoSearch />
                            </button>
                        </div>
                        <a href="#" className='text-zinc-800 text-2xl'> 
                            <GoHeartFill />
                        </a>
                        <a href="#" className='text-zinc-800 text-2xl'> 
                            <HiShoppingBag />
                        </a>
                        <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu} >
                          {showMenu ? <TbMenu3 /> : <TbMenu2 /> }
                        </a>

                    </div>

                    {/* Mobiel menu */}
                    <ul className={`flex flex-col gap-y-10 bg-orange-500/15 backdrop-blur-lg rounded-xl items-center gap-x-15 p-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                        <li>
                            <NavLink to="/" end className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`} onClick={() => setShowMenu(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`} onClick={() => setShowMenu(false)}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/process" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`} onClick={() => setShowMenu(false)}>Process</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" className={({ isActive }) => `font-semibold tracking-wider hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-zinc-800'}`} onClick={() => setShowMenu(false)}>Contact Us</NavLink>
                        </li>
                        <li className='flex p-1 border-2 border-orange-500 rounded-full '>
                            <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'  className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                            <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
                                <IoSearch />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
