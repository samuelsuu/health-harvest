'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// @ts-expect-error: No types for 'react-scroll'
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass =
    'cursor-pointer hover:text-green-600 transition-colors duration-200';
  const mobileLinkClass =
    'block text-lg hover:text-green-300 cursor-pointer';

  return (
    <header className="bg-white text-green-700 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Image
              src="/logo.png"
              alt="Health Harvest Logo"
              width={120}
              height={120}
              className="rounded-full object-contain cursor-pointer"
            />
          </ScrollLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 text-lg font-medium"
          aria-label="Main navigation"
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={linkClass}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className={linkClass}
          >
            About
          </ScrollLink>
         
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className={linkClass}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={linkClass}
          >
            Contact
          </ScrollLink>

           {/* Products now navigates to /products */}
            <Link
            href="/products"
            className={`${linkClass} px-4 py-1 rounded-full bg-green-100 border border-green-400 hover:bg-green-200 transition-all`}
            style={{ fontWeight: 700, letterSpacing: '0.05em' }}
            >
            <span role="img" aria-label="Products" className="mr-2">🛒</span>
            Products
            </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-3xl focus:outline-none text-green-700"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-green-50 text-green-700 px-6 pb-6 space-y-4 transition-all duration-300 ease-in-out">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className={mobileLinkClass}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className={mobileLinkClass}
          >
            About
          </ScrollLink>
          
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className={mobileLinkClass}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileOpen(false)}
            className={mobileLinkClass}
          >
            Contact
          </ScrollLink>
          {/* Products now navigates to /products */}
            <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className={`${mobileLinkClass} px-4 py-1 rounded-full bg-green-200 border border-green-400 font-bold flex items-center gap-2`}
            style={{ letterSpacing: '0.05em' }}
            >
            <span role="img" aria-label="Products">🛒</span>
            Products
            </Link>
        </div>
      )}
    </header>
  );
}
