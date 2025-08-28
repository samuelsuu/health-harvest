"use client";

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-green-600 pt-10">
        {/* Brand */}
        <div>
          <div className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Health Harvest Logo"
              width={100}
              height={100}
              className="object-contain cursor-pointer"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            Embracing wellness through nature. Our herbal remedies and natural
            food supplements are designed to restore balance and promote vibrant
            living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a
              href="https://wa.me/+2349038910873"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm text-white/80">
            Email: support@healthharvest.com
          </p>
          <p className="text-sm text-white/80">Phone: +234 903 891 0873</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-white/60 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Health Harvest</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
