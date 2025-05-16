import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  'Certified Security Professionals',
  'Industry-Leading Methodologies',
  'Comprehensive Security Solutions',
  '24/7 Support Available',
  'Customized Security Strategies',
  'Regular Security Updates',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SecAudit MY?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              With years of experience in cybersecurity, we provide comprehensive security solutions
              tailored to your business needs. Our team of certified professionals uses cutting-edge
              technologies and industry-leading methodologies to protect your digital assets.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0"
          >
            <div className="bg-secondary rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <div className="text-gray-300">
                    To provide world-class security solutions that protect businesses from evolving cyber threats
                    while ensuring compliance with industry standards and regulations.
                  </div>
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-xl font-semibold text-white">Our Values</h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary">▹</span>
                        <span className="ml-3 text-gray-300">Excellence in Service Delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary">▹</span>
                        <span className="ml-3 text-gray-300">Integrity and Transparency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary">▹</span>
                        <span className="ml-3 text-gray-300">Innovation in Security Solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 