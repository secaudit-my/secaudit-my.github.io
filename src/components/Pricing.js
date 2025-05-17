import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '199',
      resources: 'Up to 25 resources',
      features: [
        '1-time CLI scan',
        'Summary report (PDF)',
        'Basic risk findings'
      ]
    },
    {
      name: 'Growth',
      price: '399',
      resources: '26–100 resources',
      features: [
        '1-time CLI scan',
        'Detailed report with remediation',
        'Severity rating'
      ]
    },
    {
      name: 'Pro',
      price: '799',
      resources: '101–250 resources',
      features: [
        'In-depth CLI scan',
        'Detailed report + risk heatmap',
        'Email support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      resources: '251+ resources',
      features: [
        'Full CLI scan',
        'Custom report',
        '1-on-1 consultation',
        'SLA support'
      ]
    }
  ];

  const addOns = [
    {
      name: 'Manual Review Add-on',
      price: '299',
      description: 'Extra human analysis & validation'
    },
    {
      name: 'Follow-up Scan',
      price: '149',
      description: 'Within 30 days of first scan'
    },
    {
      name: 'Priority Support',
      price: '99',
      description: 'Per month'
    }
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            CLI Tool Scan Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your AWS infrastructure
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-primary">
                    {plan.price === 'Custom Quote' ? (
                      plan.price
                    ) : (
                      <>RM {plan.price}</>
                    )}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.resources}</p>
              </div>
              <div className="px-6 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-8 mt-8">
                <button className="w-full bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-dark transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Add-ons (Optional)
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {addOns.map((addon) => (
              <motion.div
                key={addon.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-900">{addon.name}</h4>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-2xl font-bold text-primary">RM {addon.price}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{addon.description}</p>
                </div>
                <button className="mt-6 w-full bg-primary bg-opacity-10 text-primary rounded-md px-4 py-2 hover:bg-opacity-20 transition-colors">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 