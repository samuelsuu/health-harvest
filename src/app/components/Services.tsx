'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf,  Apple } from 'lucide-react';

const services = [
  {
    title: 'Herbal Treatments',
    description: 'Gentle, effective remedies made from nature to help restore your body’s balance and vitality.',
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    image: 'https://images.pexels.com/photos/4040564/pexels-photo-4040564.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    title: 'Food Supplements',
    description: 'Premium supplements crafted to fill nutritional gaps and promote lasting wellness.',
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    image: '/herb3.jpg',
  },
  {
    title: 'Natural Foods',
    description: 'Wholesome, organic foods that nourish the body and align with your natural rhythm.',
    icon: <Apple className="text-green-600 w-6 h-6" />,
    image: '/herb.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-700 mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12"
        >
          Explore our nature-powered offerings crafted to support your body’s natural healing and nutrition.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-medium px-8 py-3 rounded-full transition duration-300"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
