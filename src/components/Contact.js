import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Get In Touch
          </motion.h2>
          <p className="mt-4 text-xl text-gray-500">
            Let's discuss how we can help secure your business
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 lg:mt-0"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                <dl className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>+60 (3) XXX-XXXX</p>
                      <p className="mt-1">Mon-Fri 9am to 6pm MYT</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>contact@secaudit.my</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 