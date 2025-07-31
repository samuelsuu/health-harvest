'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-blue-700 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herb.jpg"
          alt="Herbal plants and wellness"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl">
          Embrace Natural Wellness with{' '}
          <span className="text-green-400">Health Harvest</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed drop-shadow-md">
          We provide effective <strong>herbal treatments</strong>, pure{' '}
          <strong>natural food supplements</strong>, and trusted{' '}
          <strong>well-being products</strong> designed for healthy living.
        </p>

        <Link
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 transition duration-300 px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
