import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  ServerIcon,
  CloudIcon,
  DocumentMagnifyingGlassIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Security Auditing',
    description: 'Comprehensive assessment of your systems and infrastructure to identify vulnerabilities and security gaps.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Penetration Testing',
    description: 'Simulated cyber attacks to evaluate the security of your IT systems and identify potential entry points.',
    icon: LockClosedIcon,
  },
  {
    name: 'Cloud Security',
    description: 'Specialized security solutions for cloud infrastructure, ensuring your data remains protected across platforms.',
    icon: CloudIcon,
  },
  {
    name: 'Compliance Assessment',
    description: 'Evaluation and guidance to meet industry security standards and regulatory requirements.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Infrastructure Security',
    description: 'End-to-end protection for your IT infrastructure, including networks, servers, and applications.',
    icon: ServerIcon,
  },
  {
    name: 'Security Training',
    description: 'Custom security awareness training programs for your team to build a strong security culture.',
    icon: UserGroupIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Our Security Services
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive security solutions to protect your business from evolving cyber threats
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-primary-dark bg-opacity-10">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 