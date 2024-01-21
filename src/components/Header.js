"use client"

import { clearData } from '@/redux/userSilce';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch()

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log(isMobileMenuOpen)
  return (
    <header className='border-b-2'>
      {
        !user ? (
          <div className='flex justify-between p-[1.5rem] items-center containers'>
            <div>
              <Link href="/" className='f text-[1.5rem] font-bold'>Exclusive</Link>
            </div>
            <nav className={`flex gap-[2rem] items-center mobile-nav-bar ${isMobileMenuOpen ? 'block' : 'hidden-menu'}`}>
              <Link href="/" className='text-[rem text-black] font-normal'>Home</Link>
              <Link href="/product" className='text-[rem text-black] font-normal'>Product</Link>
              <Link href="/contact" className='text-[rem text-black] font-normal'>Contact</Link>
              <Link href="/product/productData" className='text-[rem text-black] font-normal'>Prodct Data</Link>
              <Link href="/user/login" className='text-[rem text-black] font-normal'>Login</Link>
            </nav>
            <div className='flex gap-5 items-center'>
              <div className="relative flex-1 flex-shrink-0 sm:flex hidden">
                <input
                  className="px-2 py-1 w-[min(300px)] outline-none"
                  placeholder="What are you looking for?"
                />
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-2 cursor-pointer text-[1.25rem]"></i>
              </div>
              <div>
                <i className="fa-regular fa-heart text-[1.25rem] pt-2"></i>
              </div>
              <div>
                <i className="fa-solid fa-cart-shopping text-[1.25rem] pt-2"></i>
              </div>
              <div className="hidden hamburger">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[1.5rem] focus:outline-none"
                >
                  &#9776; {/* Hamburger Icon */}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-between p-[1.5rem] items-center containers'>
            <div>
              <Link href="/" className='f text-[1.5rem] font-bold'>Exclusive</Link>
            </div>
            <nav className='flex gap-[2rem] items-center'>
              <Link href="/" className='text-[rem text-black] font-normal'>Home</Link>
              <Link href="/product" className='text-[rem text-black] font-normal'>Product</Link>
              <Link href="/contact" className='text-[rem text-black] font-normal'>Contact</Link>
              <Link href="/product/productData" className='text-[rem text-black] font-normal'>Prodct Data</Link>
            </nav>
            <div className='flex gap-5 items-center'>
              <div className="relative flex flex-1 flex-shrink-0">
                <input
                  className="px-2 py-1 w-[min(300px)] outline-none"
                  placeholder="What are you looking for?"
                />
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-2 cursor-pointer text-[1.25rem]"></i>
              </div>
              <div>
                <i className="fa-regular fa-heart text-[1.25rem] pt-2"></i>
              </div>
              <div>
                <i className="fa-solid fa-cart-shopping text-[1.25rem] pt-2"></i>
              </div>
              <div className="relative group">
                <div onClick={toggleDropdown} className="cursor-pointer">
                  <i className="fa-regular fa-user text-[1.25rem] pt-2"></i>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 p-2 rounded shadow-md z-20">
                    <button className='block text-[rem text-black] font-normal mb-2' onClick={() => dispatch(clearData())}>
                      Logout
                    </button>

                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }
    </header >
  );
};

export default Header;
