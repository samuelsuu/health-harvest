'use client';

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-200 relative">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+2349038910873"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-md z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-green-700 mb-14"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left Column – Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@healthharvest.com"
                    className="text-green-700 hover:underline"
                  >
                    info@healthharvest.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <span className="text-gray-800">+234 903 891 0873</span>
                </li>
                <li>
                  <strong>Location:</strong>{' '}
                  <span className="text-gray-800">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect with Us</h3>
              <div className="flex items-center space-x-5 text-green-700">
                <a href="https://facebook.com/healthharvest" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={22} /></a>
                <a href="https://instagram.com/healthharvest" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={22} /></a>
                <a href="https://youtube.com/@healthharvest" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube size={22} /></a>
                <a href="https://tiktok.com/@healthharvest" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok size={22} /></a>
                <a href="https://x.com/healthharvest" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={22} /></a>
              </div>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
