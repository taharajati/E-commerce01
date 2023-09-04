import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BiShoppingBag } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../img/logo-no-background.png';

const Header = () => {
  // header state

  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState('');


  // event Listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    
    <header
      className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all bg-white h-[50px] `}
    >

      <div className="container mx-auto flex items-center justify-between h-full">
       
          

        <div className='flex relative  gap-4' >
        {/* cart */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
          <BiShoppingBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
        {/* Sign In / Register */}
        <div className="hidden xl:flex items-center  ">
              <Link to="/" className="cursor-pointer flex relative " >
                <BiUserCircle className="text-2xl " fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </Link>
            </div>
        </div>
        
        {/* navbar */}
        <nav className="flex justify-between  text-primary w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            

                   <input className=' rounded-[10px]'
                     type="text"
                     placeholder="   Search... "
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                   />
            {/* Nav Link */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link to="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category" className="hover:text-gray-500">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-gray-500">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-500">
                  Contact Us
                </Link>
              </li>
            </ul>


          {/* logo */}
        <Link to="/">
          <div>
            <img className="w-[150px] text-primary "  src={Logo} alt="" />
          </div>
        </Link>

        
          </div>
          {/* Responsive navbar */}
       

          <Link to="/" className="navbar-burger self-center mr-12 xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;





