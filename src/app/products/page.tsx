'use client';

import { useState } from 'react';
import Header from '../components/Header';
import { div } from 'framer-motion/client';
import Footer from '../components/Footer';

export default function ProductsSection() {
  const [products] = useState([
    {
      id: 1,
      name: 'Organic Honey',
      description:
        'Pure, raw organic honey sourced from sustainable farms. Packed with natural goodness for your health.',
      price: 9500,
      image:
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80',
    },
    {
      id: 2,
      name: 'Herbal Tea Blend',
      description:
        'A soothing blend of herbs to promote relaxation and wellness. Perfect for a calming evening.',
      price: 6500,
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    },
    {
      id: 3,
      name: 'Natural Soap',
      description:
        'Handmade soap with natural oils and essential oils for gentle, nourishing skincare.',
      price: 3500,
      image:
        'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80',
    },
  ]);

  return (
    <section >
      {/* <Header /> */}
     <div id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-700">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer/>
    </section>
  );
}
