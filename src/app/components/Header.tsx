'use client';

import Image from 'next/image';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// @ts-expect-error: No types for 'react-scroll'
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = 'cursor-pointer hover:text-blue-200 transition-colors duration-200';
  const mobileLinkClass = 'block text-lg hover:text-green-300 cursor-pointer';

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
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
        <nav className="hidden md:flex space-x-6 text-lg font-medium" aria-label="Main navigation">
          <ScrollLink to="home" smooth={true} duration={500} offset={-80} className={linkClass}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className={linkClass}>About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-80} className={linkClass}>Services</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className={linkClass}>Contact</ScrollLink>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-3xl focus:outline-none"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-green-800 text-white px-6 pb-6 space-y-4 transition-all duration-300 ease-in-out">
          <ScrollLink to="home" smooth={true} duration={500} offset={-80} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-80} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>Services</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>Contact</ScrollLink>
        </div>
      )}
    </header>
  );
}
