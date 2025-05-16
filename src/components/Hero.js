import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Secure Your Digital</span>
                <span className="block text-primary">Assets with Confidence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional security auditing, penetration testing, and consultancy services to protect your business from cyber threats.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                    Get Free Consultation
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white border-primary hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-secondary sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 p-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <ShieldCheckIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Security Auditing</h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <LockClosedIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Penetration Testing</h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <ServerIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Cloud Security</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 